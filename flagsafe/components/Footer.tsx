import Link from 'next/link';
import { Github, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logos/baai-logo.png"
                alt="BAAI Logo"
                className="w-7 h-7"
              />
              <span className="font-bold text-lg text-gray-800">FlagSafe</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              构建大模型安全共识
              <br />
              确立红线 · 攻防一体
            </p>
          </div>

          {/* 开源项目 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">开源项目</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="https://github.com/FlagOpen" target="_blank" className="hover:text-blue-600 transition-colors">
                  开源项目
                </Link>
              </li>
              <li>
                <a href="https://flagopen.baai.ac.cn/#/model" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  开放模型
                </a>
              </li>
              <li>
                <Link href="https://data.baai.ac.cn/home" target="_blank" className="hover:text-blue-600 transition-colors">
                  开放数据
                </Link>
              </li>
              <li>
                <a href="https://flagopen.baai.ac.cn/#/course" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  技术教程
                </a>
              </li>
            </ul>
          </div>

          {/* 智源社区 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">智源社区</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="https://hub.baai.ac.cn" target="_blank" className="hover:text-blue-600 transition-colors">
                  智源社区
                </Link>
              </li>
              <li>
                <Link href="https://www.baai.ac.cn" target="_blank" className="hover:text-blue-600 transition-colors">
                  智源研究院
                </Link>
              </li>
              <li>
                <Link href="https://data.baai.ac.cn" target="_blank" className="hover:text-blue-600 transition-colors">
                  数据平台
                </Link>
              </li>
              <li>
                <Link href="https://flageval.baai.ac.cn" target="_blank" className="hover:text-blue-600 transition-colors">
                  评测平台
                </Link>
              </li>
            </ul>
          </div>

          {/* 隐私政策 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">政策协议</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="https://model.baai.ac.cn/privacy-policy" className="hover:text-blue-600 transition-colors">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="https://model.baai.ac.cn/use-agreement" className="hover:text-blue-600 transition-colors">
                  开源协议
                </Link>
              </li>
            </ul>
          </div>

          {/* 关注我们 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">关注我们</h4>
            <div className="flex space-x-3">
              {/* 微信 */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center hover:bg-emerald-600 transition-colors group relative"
              >
                <img className="w-4 h-4" src="data:image/png;base64,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" alt="微信" />

                {/* 二维码弹出层 - 从左到右淡入淡出 */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 pointer-events-none z-10">
                  <div className="w-30 bg-white rounded-lg shadow-xl border border-gray-200 p-2 [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0_0_0)] transition-[clip-path] duration-300 ease-out">
                    <img
                      src="/qrcodes/wechat-qrcode.png"
                      alt="BAAI 微信公众号"
                      className="w-30 object-contain"
                    />
                    <p className="text-xs text-gray-600 text-center mt-1 whitespace-nowrap">扫码关注</p>
                  </div>
                  {/* 小三角箭头 - 指向上方 */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-px w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-white"></div>
                </div>
              </a>

              {/* 微博 */}
              <a
                href="https://weibo.com/bjacademyofai"
                target="_blank"
                className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition-colors"
                title="微博"
              >
                <img className="w-4 h-4" src="data:image/png;base64,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" alt="微博" />
              </a>

              {/* 知乎 */}
              <a
                href="https://www.zhihu.com/topic/21187645/hot"
                target="_blank"
                className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors"
                title="知乎"
              >
                <img className="w-4 h-4" src="data:image/png;base64,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" alt="知乎" />
              </a>

              {/* B站 */}
              <a
                href="https://space.bilibili.com/424100065"
                target="_blank"
                className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center hover:bg-pink-600 transition-colors"
                title="哔哩哔哩"
              >
                <img className="w-4 h-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABUCAYAAAAGV/BPAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANrSURBVHgB7Z2BUdswFIZfmIBOgDcgbEAnKBvABu0GpRPABrABdILQCcoGcScgG/x9wsrV58qSnPjZCvm/u3fcEVuWP+RnW9gvIgYAqDRWGm9oeNI4k8I5iH77Tm472Mb97qsUiutbpN/lSPZ/9Rh3GqdSCK4vvk8xVlIKyGNdwqhAc7StM/r7JqWA8GEW7DRmTBnoTwlBpBTQnCSGMGnKQF5K6PIkpYD+k1yMNSZIGchPCW3KOsk59tgRs5SBgSnBsy5O7hbsdigCI6eMUvphBmYcOSjwSDJhjh3FR0sJKTDRoYrCUsJCBuI78UXjUmOpUWmUn6vGYaNRa7xqvGj8XCwWm9gK2YJVbKU/3CF7I8cjNIdHjVsV/Sf0YVKwH7HfNb4JiXGv8aM7oqOC/ah1Ex2VkBxqjcv2aD7pW1LlngvlDqXSePHu3gmOYI7cvanFj+T/BPuc+1sod19qjYtQinAntErIvlTSuPwHmjuuXFZo7pYqORJ0X5ca1xhwV9pt4CFjncO7VzcAmbfi7RVOkcY1eC7kHecCCcntha+R5uhHbhc0IzlL8ENC7lpIEET+Tda+ilgm2rkV0sdzcgmkE/ZSSBBErr4WrYWi/5rWu5LBU5vHRJ+/EyGmULAxFGwMBRtDwcZQsDEUbAwFG0PBxlCwMRRsDAUbM6tgGL+XZt3+0M5EkZFB/H26sZ4Nnuy9t6Q3TC849j7d3u+lWbcf2F6Q2eaDE9vb6OY+ScHt526vVMF7b6+U/eFVhDEUbAwFG0PBxlCwMRRsDAUbM6fgjdhi3X4Wcwp+jXyWftZr/vaHgennIjjZE1xw3E45CU+tHV9h/OlKs/Y72wrCh/9Gos8fryKMoWBjKNgYCjaGgo2hYGMo2BgKNoaCjaFgYyjYGAo2pi04OkGNQy05OAGIvGbcFlxLnCshfaRraCBdzqCcQvGFgUiJmfZCN0jDghwdMKAghyspkyppwJIyLTCkpIxfIacsLIsiyQ5FkfxKFfJZo6nzczQjWvf1zItd5UoKVf67E1ZaHYt7lla0o5ZQaUVf//azpK+LST+1NMVBN8FbZf3ALXAllLwLtcbVtoYwCzSPSy25BZodfiRfSFM+m8Rxji66tdyHFsl35VpvhGxx56tHcVcLuxbJ7wJ+zUMtzZObvzSeU1/z8BdlnnXipOsnWwAAAABJRU5ErkJggg==" alt="哔哩哔哩" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-xs text-gray-400">
            Copyright © 2024 Beijing Academy of Artificial Intelligence (BAAI). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
