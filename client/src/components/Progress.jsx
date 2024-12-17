const ProgressBar = ({ progress, progressFiller  }) => {
    return (
        <div className="progress">
            <div className="progress-bar" style={{ width: `${progressFiller}%` }}></div>
            <div className="ball" style={{ transform: `translateX(${progress}%)` }}></div>
        </div>
    );
};

export default ProgressBar;
