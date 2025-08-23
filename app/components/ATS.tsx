import React from 'react'

interface ATSSuggestion {
  type: "good" | "improve";
  tip: string;
}

interface ATSProps {
  score: number;
  suggestions: ATSSuggestion[];
}

const ATS = ({ score, suggestions }: ATSProps) => {
  const getGradientClass = () => {
    if (score > 69) return 'from-green-100';
    if (score > 49) return 'from-yellow-100';
    return 'from-red-100';
  };

  const getIconPath = () => {
    if (score > 69) return '/icons/ats-good.svg';
    if (score > 49) return '/icons/ats-warning.svg';
    return '/icons/ats-bad.svg';
  };

  const getSuggestionIcon = (type: "good" | "improve") => {
    return type === "good" ? "/icons/check.svg" : "/icons/warning.svg";
  };

  const subtitle = score > 69
  ? 'Great Job!'
  : score > 49
  ? 'Good Start'
  : 'Needs Improvement'

  return (
    <div className={`bg-gradient-to-br ${getGradientClass()} to-white rounded-2xl shadow-md p-6`}>
      {/* Top Section */}
      <div className="flex items-center gap-4 mb-6">
        <img src={getIconPath()} alt="ATS status" className="w-12 h-12" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">ATS Score - {score}/100</h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">{subtitle}</h3>
        
        <p className="text-gray-600 leading-relaxed">
          Your resume's compatibility with Applicant Tracking Systems (ATS) determines how well it can be parsed and ranked by automated screening software used by most companies today.
        </p>

        {/* Suggestions List */}
        <div className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="flex items-start gap-3">
              <img 
                src={getSuggestionIcon(suggestion.type)} 
                alt={suggestion.type} 
                className="w-5 h-5 mt-0.5 flex-shrink-0" 
              />
              <p className={`text-sm ${suggestion.type === "good" ? "text-green-700" : "text-amber-700"}`}>
                {suggestion.tip}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <p className="text-sm text-gray-700 font-medium mt-4 pt-4 border-t border-gray-200">
          Continue improving your ATS compatibility to increase your chances of getting noticed by recruiters.
        </p>
      </div>
    </div>
  );
};

export default ATS;
