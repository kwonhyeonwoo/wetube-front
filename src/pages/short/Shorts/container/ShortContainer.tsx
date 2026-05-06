import { useGetShorts } from "@/hooks/queries/short/useShortsQuery";
import styles from "../css/index.module.css";
import ShortVideoCard from "../components/ShortVideoCard/ShortVideoCard";
import ShortActionBarContainer from "../components/ShortActionBar/container/ShortActionBarContainer";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const ShortContainer = () => {
  const navigate = useNavigate();
  const { data } = useGetShorts();

  const [activeShortId, setActiveShortId] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!data || !containerRef.current) return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // 요소가 화면에 60% 이상 들어왔다면?
        if (entry.isIntersecting) {
          // 태그에 달아둔 data-id 값을 가져와서 state에 저장
          const currentId = entry.target.getAttribute("data-id");
          if (currentId) {
            setActiveShortId(currentId);
            console.log("현재 시청 중인 쇼츠 ID:", currentId);
          }
        }
      });
    }, options);

    const sections = containerRef.current.querySelectorAll(
      `.${styles.shortSection}`,
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [data]);
  useEffect(() => {
    if (activeShortId) {
      navigate(`/shorts/${activeShortId}`, { replace: true });
    }
  }, [activeShortId, navigate]);
  return (
    <main className={styles.shortPage} ref={containerRef}>
      {data?.map((short) => (
        <section
          key={short._id}
          data-id={short._id}
          className={styles.shortSection}
        >
          <ShortVideoCard {...short} handleFollowAction={() => {}} />
          <ShortActionBarContainer
            commentCount={short?.comments.length}
            likeCount={short?.likes?.length}
          />
        </section>
      ))}
    </main>
  );
};

export default ShortContainer;
