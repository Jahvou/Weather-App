const DetailCard = ({ label, value, unit }) => {
    return (
        <div className="detail-card">
            <p className="detail-label">{label}</p>
            <p className="detail-value">
                {value}{unit && <span> {unit}</span>}
            </p>
        </div>
    );
};

export default DetailCard;
