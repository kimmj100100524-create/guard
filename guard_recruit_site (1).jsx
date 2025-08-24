/** tailwind.config.js **/
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};

/** index.css **/
@tailwind base;
@tailwind components;
@tailwind utilities;

/** src/GuardRecruitment.jsx **/
import React from "react";
import { motion } from "framer-motion";
import './index.css'; // Tailwind 및 사용자 CSS import

export default function GuardRecruitment({ nickname = "닉네임" }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white flex items-center justify-center p-8">
      <div className="max-w-3xl w-full bg-gray-900 border border-gray-700 shadow-2xl rounded-3xl overflow-hidden">
        <div className="text-center space-y-6 p-8 bg-gradient-to-b from-gray-800 to-gray-900">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide text-yellow-400 drop-shadow-lg">🛡️ 경호대 스카웃</h1>
            <p className="text-gray-300 text-base md:text-lg mt-2">강철부대의 최정예 부서, [경호대]에 합류하실 것을 정중히 권유드립니다.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="bg-gray-800 rounded-2xl p-6 border border-gray-600 shadow-inner">
            <p className="leading-relaxed text-gray-200 text-sm md:text-base">
              안녕하십니까, <span className="font-semibold text-yellow-300">@{nickname}</span> 님.<br /><br />
              ✔️ 참여를 원하시면 [체크],<br />
              ❌ 원치 않으시면 [엑스]로 답변 부탁드립니다.<br /><br />
              경호대는 '토니 각하'를 최전선에서 수호하는 임무를 맡고 있으며,
              지원자는 검토 후 정식 배치됩니다.<br /><br />
              이 홍보는 공식적인 부서 모집이며, 뒷메로 오해하지 않으시길 바랍니다.
            </p>
          </motion.div>
          <motion.blockquote initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="italic text-center text-lg md:text-xl text-gray-300 border-l-4 border-yellow-400 pl-6 drop-shadow-md">
            “각하를 수호할 강철 같은 성실함이, 당신을 경호대의 일원으로 만든다.”
          </motion.blockquote>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 1 }} className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <button onClick={() => window.open("https://open.kakao.com/o/gn4tUtLh", "_blank")} className="flex items-center justify-center gap-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-2xl px-8 py-4 font-semibold text-lg transition-all duration-300 shadow-lg">카카오톡 서버 참가</button>
            <button onClick={() => window.open("https://discord.gg/vT7nTskD", "_blank")} className="flex items-center justify-center gap-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-2xl px-8 py-4 font-semibold text-lg transition-all duration-300 shadow-lg">디스코드 서버 참가</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/** src/App.jsx **/
import GuardRecruitment from "./GuardRecruitment";

export default function App() {
  return <GuardRecruitment nickname="김철수" />;
}
