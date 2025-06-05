import styles from '../styles/RecipeTitle.module.css';

const RecipeTitle = ({ name, name_jap }) => {
  return (
    <div className={styles.title_container}>
     {name_jap && <h3 className={styles.japanese_title}>{name_jap}</h3>}
     {name && <h4 className={styles.english_title}>{name}</h4>}

    </div>
  );
}

export default RecipeTitle

/* 
function RecipeTitle(props) {
    return <h3>{props.title}</h3>;
}
export default RecipeTitle 
*/