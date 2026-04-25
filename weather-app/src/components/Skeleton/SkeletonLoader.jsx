import "./SkeletonLoader.css";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton skeleton-city" />
      <div className="skeleton skeleton-temp" />
      <div className="skeleton skeleton-detail" />
      <div className="skeleton-grid">
        <div className="skeleton skeleton-card" />
        <div className="skeleton skeleton-card" />
        <div className="skeleton skeleton-card" />
        <div className="skeleton skeleton-card" />
        <div className="skeleton skeleton-card" />
        <div className="skeleton skeleton-card" />
      </div>
    </div>
  );
};

export default SkeletonLoader;