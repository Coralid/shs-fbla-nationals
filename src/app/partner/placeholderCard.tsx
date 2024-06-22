import styles from "./card.module.css";

export default function PlaceholderCard() {
    // this is a placeholder component for during data fetching
    return (
        <div className={styles.card}>
            <h2>
                Loading...
            </h2>
            <div>
                <p>
                    Loading...
                </p>
                <p>
                    Loading...
                </p>
                <p>
                    Loading...
                </p>
                <p>
                    Loading...
                </p>
            </div>
        </div>
    );
}