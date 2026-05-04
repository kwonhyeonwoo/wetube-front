import { useGetShorts } from "@/hooks/queries/short/useShortsQuery";
import styles from "../css/index.module.css";
import ShortVideoCard from "../components/ShortVideoCard/ShortVideoCard";
import ShortActionBarContainer from "../components/ShortActionBar/container/ShortActionBarContainer";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const ShortContainer = () => {
  const navigate = useNavigate();
  const { data } = useGetShorts();

  // 1️⃣ 현재 화면에 보이는 쇼츠의 ID를 저장할 상태
  const [activeShortId, setActiveShortId] = useState<string | null>(null);
  // 전체 목록을 감싸는 컨테이너의 Ref (이 안에서만 section을 찾기 위해)
  const containerRef = useRef<HTMLElement>(null);
  // 2️⃣ Intersection Observer 세팅
  useEffect(() => {
    // 아직 데이터가 없거나 껍데기가 없으면 실행 안 함
    if (!data || !containerRef.current) return;

    const options = {
      root: null, // 브라우저 뷰포트(화면) 기준
      rootMargin: "0px",
      threshold: 0.6, // 💡 화면에 60% 이상 들어왔을 때 '보고 있다'고 판정!
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

    // 3️⃣ containerRef 안의 모든 쇼츠 section들을 관찰 대상에 등록
    const sections = containerRef.current.querySelectorAll(
      `.${styles.shortSection}`,
    );
    sections.forEach((section) => observer.observe(section));

    // 클린업 함수: 컴포넌트가 꺼지거나 데이터가 바뀔 때 관찰 해제
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [data]);
  useEffect(() => {
    if (activeShortId) {
      // url 주소를 `/shorts/해당ID` 로 변경합니다.
      navigate(`/shorts/${activeShortId}`, { replace: true });
    }
  }, [activeShortId, navigate]); // activeShortId가 바뀔 때마다 실행됨
  return (
    <main className={styles.shortPage} ref={containerRef}>
      {data?.map((short) => (
        <section
          key={short._id}
          data-id={short._id}
          className={styles.shortSection}
        >
          <ShortVideoCard {...short} handleFollowAction={() => {}} />
          <ShortActionBarContainer />
        </section>
      ))}
    </main>
  );
};

export default ShortContainer;
