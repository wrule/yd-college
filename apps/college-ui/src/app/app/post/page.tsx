'use client';

import useContractPost from "@/contracts/useContractPost";

const PostPage = () => {
  const a = useContractPost('22');

  return (
    <div className="max-w-3xl mx-auto p-6 pt-20">
      <div>{JSON.stringify(a)}</div>
      {/* 发帖区域 */}
      <div className="bg-[#295DF4]/95 rounded-2xl p-6 mb-8 shadow-lg backdrop-blur-sm">
        <textarea
          className="w-full h-24 bg-white/10 rounded-xl p-4 text-white placeholder-white/70 resize-none outline-none transition-all duration-200 focus:bg-white/20 text-sm"
          placeholder="Share your Web3 development experience..."
        />
        <div className="flex justify-end mt-3">
          <button className="px-8 py-2.5 bg-white text-[#295DF4] rounded-full font-semibold
            hover:bg-opacity-90 transition-all duration-200 active:scale-95 text-sm">
            Post
          </button>
        </div>
      </div>

      {/* 帖子列表 */}
      <div className="space-y-6">
        {[1, 2, 3].map((post) => (
          <article key={post} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#295DF4]/80 to-[#295DF4] flex items-center justify-center text-white font-medium">
                DN
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-800">DevName.eth</h3>
                  <span className="text-gray-400 text-sm">2h ago</span>
                </div>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Just deployed my first smart contract on Ethereum. The gas fees were surprisingly reasonable today. Here's what I learned about optimizing contract deployment... 🚀
                </p>
                <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">
                  <button className="flex items-center gap-1.5 hover:text-[#295DF4] transition-colors">
                    <span>💬</span>
                    <span>4</span>
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-[#295DF4] transition-colors">
                    <span>⭐</span>
                    <span>23</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default PostPage;
