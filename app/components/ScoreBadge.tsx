import React from 'react'

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge = ({ score }: ScoreBadgeProps) => {
  const getBadgeStyles = () => {
    if (score > 69) {
      return {
        container: 'bg-green-100 border border-green-200',
        text: 'text-green-600'
      };
    } else if (score > 49) {
      return {
        container: 'bg-yellow-100 border border-yellow-200',
        text: 'text-yellow-600'
      };
    } else {
      return {
        container: 'bg-red-100 border border-red-200',
        text: 'text-red-600'
      };
    }
  };

  const getBadgeText = () => {
    if (score > 69) return 'Strong';
    if (score > 49) return 'Good Start';
    return 'Needs Work';
  };

  const styles = getBadgeStyles();

  return (
    <div className={`px-3 py-1 rounded-full text-sm font-medium ${styles.container}`}>
      <p className={styles.text}>{getBadgeText()}</p>
    </div>
  );
};

export default ScoreBadge;
