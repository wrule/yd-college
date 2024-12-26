const CollegePage = () => {
  // Mock data
  const myLearning = [
    {
      id: 1,
      title: "Solidity Advanced Development",
      progress: 45,
      lastAccessed: "2 days ago",
      totalLessons: 24,
      completedLessons: 11,
      thumbnail: "🔷"
    },
    {
      id: 2,
      title: "Web3.js Fundamentals",
      progress: 72,
      lastAccessed: "5 hours ago",
      totalLessons: 18,
      completedLessons: 13,
      thumbnail: "⚡"
    }
  ];

  const courseCategories = [
    {
      id: 1,
      name: "Smart Contracts",
      courses: [
        {
          id: 1,
          title: "Smart Contract Security",
          instructor: "Alex Thompson",
          price: "0.8 ETH",
          level: "Advanced",
          duration: "12 hours",
          students: 1240,
          description: "Learn to audit and secure smart contracts. Cover common vulnerabilities and best practices.",
          thumbnail: "🔐"
        },
        {
          id: 2,
          title: "Solidity Zero to Hero",
          instructor: "Sarah Chen",
          price: "0.5 ETH",
          level: "Beginner",
          duration: "15 hours",
          students: 2156,
          description: "Complete guide to Solidity development from basics to advanced patterns.",
          thumbnail: "📝"
        }
      ]
    },
    {
      id: 2,
      name: "DeFi Development",
      courses: [
        {
          id: 3,
          title: "Build Your Own DEX",
          instructor: "Michael Roberts",
          price: "1.2 ETH",
          level: "Intermediate",
          duration: "20 hours",
          students: 890,
          description: "Step-by-step guide to building a decentralized exchange from scratch.",
          thumbnail: "💱"
        }
      ]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 pt-20">
      {/* My Learning Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">My Learning</h2>
        <div className="space-y-6">
          {myLearning.map(course => (
            <div key={course.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
              <div className="flex">
                <div className="w-48 bg-gradient-to-r from-[#295DF4]/90 to-[#295DF4] flex items-center justify-center p-6">
                  <span className="text-4xl text-white">{course.thumbnail}</span>
                </div>
                <div className="flex-1 p-6">
                  <h3 className="font-semibold text-lg mb-4">{course.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#295DF4] h-2 rounded-full" style={{width: `${course.progress}%`}}></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">Last accessed: {course.lastAccessed}</p>
                    <button className="w-full py-2 mt-2 text-[#295DF4] font-semibold hover:bg-[#295DF4]/5 rounded-lg transition-colors">
                      Continue Learning
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Available Courses Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
        <div className="space-y-12">
          {courseCategories.map(category => (
            <div key={category.id} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
              <div className="space-y-6">
                {category.courses.map(course => (
                  <div key={course.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
                    <div className="flex">
                      <div className="w-48 bg-gradient-to-r from-gray-100 to-gray-50 flex items-center justify-center p-6">
                        <span className="text-4xl">{course.thumbnail}</span>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-[#295DF4] px-3 py-1 bg-[#295DF4]/10 rounded-full">
                            {course.level}
                          </span>
                          <span className="text-gray-600 text-sm">{course.duration}</span>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-sm text-gray-600">
                            <p>by {course.instructor}</p>
                            <p>{course.students} students</p>
                          </div>
                          <span className="font-semibold text-lg">{course.price}</span>
                        </div>
                        <button className="w-full py-2.5 bg-[#295DF4] text-white rounded-lg font-semibold hover:bg-[#295DF4]/90 transition-colors">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CollegePage;
