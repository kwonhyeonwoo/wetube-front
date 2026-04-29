import type {
  FieldValues,
  PathValue,
  UseFormSetValue,
  Path,
} from "react-hook-form";
import styles from "../css/index.module.css";
import { useState, type ChangeEvent } from "react";

interface Props <T extends FieldValues>{
  hashtags: string[];
  setValue: UseFormSetValue<T>;
}

const TagSectionContainer =<T extends FieldValues> ({hashtags,setValue,}:Props<T>) => {
    const [inputValue,setInputValue] = useState<string>("");
    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        // 한글 입력 시 이벤트가 두번 발생하는 문제 해결
        if(e.nativeEvent.isComposing) return; 

        if(e.key === "Enter"){
            e.preventDefault(); // 폼 전체  submit 되는거 막음

            // 띄어쓰기 방지
            const trimmedValue = inputValue.trim();
            if(!trimmedValue) return ;

            // 중복 방지
            if (hashtags.includes(trimmedValue)) {
              setInputValue("");
              return;
            }

            // 입력 태그 setValue 넣기
            setValue("hashtags" as Path<T>, [...hashtags, trimmedValue] as PathValue<T, Path<T>>, {
                shouldValidate: true,
              });
            setInputValue("");
        }
    };
    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.target.value);
    }

    const handleTagRemove = (removeTag:string)=>{
        setValue(
          "hashtags" as Path<T>,
          hashtags?.filter((tag) => tag !== removeTag) as PathValue<T, Path<T>>,
          {
            shouldValidate: true,
          },
        );
    }
  return (
    <div className={styles.tagSection}>
        <span className={styles.tagTitle}>태그</span>
        <ul className={styles.tagLists}>
            {hashtags?.map((item)=>(
                <li
                    key={item} 
                    onClick={()=>handleTagRemove(item)}
                    className={styles.tagList}
                >
                    #{item}
                </li>
            ))}
        </ul>
        <input 
            type="text" 
            value={inputValue}
            placeholder="태그를 추가하고 Enter을 누르세요"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={styles.tagInput}
        />
    </div>
  )
}

export default TagSectionContainer