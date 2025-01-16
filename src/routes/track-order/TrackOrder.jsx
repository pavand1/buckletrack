import { useState } from 'react';
import styles from './TrackOrder.module.scss';
const TrackOrder = () => {
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");
    const handleTrackOrder = () => {
        if(!orderId) {
            setError("Order ID is required");
            return;
        }
        // window.open(`https://track.buckletrack.com/#/orders/${orderId}`, "_blank");
        // TODO: change this to a link to track page
        const url = window.location.href;
        window.open(url, "_blank");
        setOrderId("");
        setError("");
    }
    return <div className={styles.container}>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <h2 className={styles.heading}>Track Order</h2>
            <div className={`${styles.formGroup} ${styles.formGroupNew}`}>
                <label htmlFor="Order ID" className={styles.label}>
                    {"Order ID"} {/* TODO: add exact label from client */}
                </label>
                <input
                    type="text"
                    id="Order ID"
                    name="Order ID"
                    placeholder="Enter Order ID"
                    className={styles.input}
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                />
            </div>
            <button className={styles.submitButton} onClick={handleTrackOrder}>
                    {"Track Order"}
            </button>
            {error && <p className={styles.error}>{error}</p>}
        </form>
    </div>
}

export default TrackOrder;