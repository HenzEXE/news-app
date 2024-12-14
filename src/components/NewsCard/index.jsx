import styles from './NewsCard.module.css';


const truncateChar = (text) => {
    let result = ''
    for (let i = 0; i < text.length; i++) {
        if(i < 150) {
            result += text[i];
        }else {
            break
        }
    }

    return `${result}..`
}

function NewsCard(props) {
    const { headline,  abstract,  source, author, onSave, onViewNewDetail, showUnsave, onUnsave} = props
    return (
        <section className={styles.newsCard}>
            <h3>{source}</h3>
            <h1>{headline}</h1>
            <h4>{author}</h4>
            <p>{truncateChar(abstract)}</p>
        <div className={styles.buttonContainer}>
            <button 
                    className={styles.newsPageButton} 
                    onClick={() => {
                        console.log("DEBUG: OPENING A NEW TAB")
                        onViewNewDetail()
                        console.log("DEBUG: NEW TAB OPENED")

            }}>News Page</button>
            
            {showUnsave ? <button 
                className={styles.unsaveButton} 
                onClick={() => {
                    onUnsave()
                }}>
                    Unsave
                </button>
                :   <button 
                className={styles.saveButton}
                onClick={() => {
                    onSave()
                }}
            >
                Save
            </button>}

        </div>
        </section>
    )
}

export { NewsCard }