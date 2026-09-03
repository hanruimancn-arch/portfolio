import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const supportingProjects = [
  {
    no: '01',
    slug: 'roger-dubuis-content',
    brand: 'Roger Dubuis',
    type: '品牌内容 / 产品传播 / Social Media',
    title: '高级制表品牌社媒内容策划',
    result: '单篇最高阅读 2.9W+｜多篇阅读 1W+｜累计可见阅读约 11W+',
    copy: '围绕 Roger Dubuis 新品、复杂制表工艺、品牌故事及赛车合作等传播内容，参与品牌社媒选题策划与内容输出。针对腕表产品信息专业度高、技术资料复杂的问题，重点从品牌及产品资料中提炼核心传播信息，并根据不同内容主题重新组织标题、正文结构与视觉素材。',
    tags: ['品牌内容策划', '产品信息转化', '社媒文案'],
    theme: 'blue',
    role: '品牌内容 / 产品传播 / Social Media',
    deliverables: '品牌内容策划 / 产品信息转化 / 社媒文案 / 视觉内容协同',
    gallery: ['品牌内容', '产品内容', '节点内容', '内容呈现'],
    galleryImages: [
      { src: 'roger-dubuis-gallery-01.jpg', alt: 'Roger Dubuis 微博内容与视觉呈现' },
      { src: 'roger-dubuis-gallery-02.jpg', alt: 'Roger Dubuis 品牌标识视觉' },
      { src: 'roger-dubuis-gallery-03.jpg', alt: 'Roger Dubuis 腕表产品长图内容策划' },
      { src: 'roger-dubuis-gallery-04.jpg', alt: 'Roger Dubuis 社交媒体运营内容' },
    ],
    sections: [
      { title: '内容策略', body: '根据新品上市、品牌故事、复杂制表及赛事合作等不同传播任务规划选题，将内容拆分为品牌叙事、产品解读与文化场景等方向。品牌向内容强化先锋精神与高级制表美学；产品向内容从复杂功能、机芯及设计信息中提炼核心卖点；赛车合作内容则通过速度、机械性能与先锋生活方式，为腕表产品增加更具场景感的传播切口。' },
      { title: '信息转化', body: '针对腕表资料专业度高、阅读门槛高的问题，重新调整信息层级：先突出最具辨识度的产品特点，再补充机芯、工艺与品牌背景，使专业信息既保持准确性，又符合社媒用户的阅读习惯。' },
      { title: '视觉协同', body: '根据不同选题筛选产品图、机芯细节、品牌视觉及赛车素材，并结合正文结构调整图片顺序与信息节奏，完成从资料梳理—选题规划—文案撰写—视觉素材—发布跟进的完整内容流程。' },
      { title: '核心贡献', body: '将复杂高级制表信息转化为更适合社交媒体传播的内容表达，在保持品牌调性与产品准确性的同时，通过选题、标题、内容结构与视觉素材共同降低专业内容的理解门槛。' },
    ],
  },
  {
    no: '02',
    slug: 'appsflyer-brian-ip',
    brand: 'AppsFlyer',
    type: 'Brand IP / Local Content / Social Creative',
    title: '「我的同事布莱恩」品牌社交化内容',
    result: '工作沟通 / 回复确认 / 日常互动 / 情绪表达',
    copy: 'AppsFlyer 本身处于专业度较高的 B2B 营销科技语境，日常品牌沟通更多围绕产品、行业与客户展开。基于已有“小熊”品牌形象，项目尝试为品牌增加一种更轻、更具社交属性的内容表达，将原有视觉资产进一步延展至中国用户熟悉的职场与日常沟通场景。',
    tags: ['品牌IP延展', '内容本地化', '社交创意'],
    theme: 'cream',
    role: 'Brand IP / Local Content / Social Creative',
    deliverables: '品牌IP延展 / 内容本地化 / 社交创意 / 文案策划',
    gallery: ['表情包内容运营'],
    galleryImages: [
      { src: 'appsflyer-brian-gallery.jpg', alt: 'AppsFlyer「我的同事布莱恩」表情包内容运营展示' },
    ],
    galleryLayout: 'single',
    sections: [
      { title: 'B2B品牌社交化', body: '不改变品牌专业属性，而是在正式行业内容之外增加更轻量的沟通触点，通过品牌 IP 拉近与用户之间的距离。' },
      { title: '场景拆解', body: '围绕职场沟通、回复确认、日常互动与情绪表达等高频场景，梳理用户真实使用表情包的语境，让内容从“品牌想表达什么”转向“用户什么时候会使用”。' },
      { title: '内容设计', body: '根据不同场景匹配人物动作、情绪状态、中文文案与使用语境，并结合品牌 IP 案例研究、视觉风格参考与素材筛选，形成更符合中国本地社交习惯的内容表达。' },
      { title: '品牌资产延展', body: '将原本偏静态的“小熊”视觉形象进一步转化为「我的同事布莱恩」表情包系列，使品牌 IP 从识别符号延展为可被使用、分享和互动的社交内容。' },
    ],
  },
  {
    no: '03',
    slug: 'roger-dubuis-lamborghini',
    brand: 'Roger Dubuis × Lamborghini',
    type: '品牌活动 / KOL沟通 / Event Communication',
    title: 'Super Trofeo 亚洲挑战赛上海站',
    result: 'KOL邀约—现场体验—活动执行—传播内容',
    metrics: [
      { value: '200+', label: '媒体 / KOL / 品牌嘉宾对接人次' },
      { value: '100+', label: '奢侈品及高端生活方式媒体、KOL资源沉淀' },
      { value: '20+', label: '品牌传播内容落地' },
    ],
    copy: '围绕 Roger Dubuis × Lamborghini Squadra Corse 品牌合作，参与 Super Trofeo 亚洲挑战赛上海站观赛活动执行与传播支持。',
    tags: ['KOL沟通', '品牌活动执行', '活动传播'],
    theme: 'lavender',
    role: '品牌活动 / KOL沟通 / Event Communication',
    deliverables: 'KOL沟通 / 品牌活动执行 / 内容整理 / 活动传播',
    gallery: ['KOL & Guest', '赛事现场', '品牌合作', '活动传播'],
    galleryImages: [
      { src: 'roger-lamborghini-gallery-01.jpg', alt: 'Roger Dubuis × Lamborghini 活动嘉宾与媒体沟通现场' },
      { src: 'roger-lamborghini-gallery-02.jpg', alt: 'Super Trofeo 亚洲挑战赛赛事现场' },
      { src: 'roger-lamborghini-gallery-03.jpg', alt: 'Roger Dubuis × Lamborghini 品牌合作赛车' },
      { src: 'roger-lamborghini-gallery-04.jpg', alt: 'Roger Dubuis 品牌赛事活动空间' },
    ],
    sections: [
      { title: 'KOL& Guest', body: '梳理奢侈品及高端生活方式领域的媒体、KOL资源，用于品牌邀约及活动传播；从前期联络、活动信息下发，到现场沟通及后续发布进度持续跟进，将 KOL 从单纯“到场嘉宾”进一步连接至后续品牌传播。' },
      { title: 'Event', body: '围绕赛事观赛体验梳理活动流程，参与物料准备、现场动线及嘉宾接待安排；同时推进 KOL、媒体及品牌嘉宾邀约与到场确认，持续同步赛事安排、活动信息与传播要求，保证嘉宾体验与品牌活动节奏顺利衔接。活动当天参与观赛组织、嘉宾接待及现场流程协同，根据真实赛事进程同步品牌活动节点及嘉宾信息，让 KOL 在赛车、品牌与腕表共同构成的场景中完成完整体验。' },
      { title: 'Communication', body: '活动后围绕赛事亮点、品牌合作关系、腕表产品及 KOL现场体验整理传播内容，参与宣传稿、传播素材及发布效果跟进，将线下赛事继续转化为20+品牌二次投放内容，沉淀50+品牌长期资产。' },
    ],
    closing: '项目将 KOL邀约—现场体验—活动执行—传播内容串联起来，并借助赛车赛事中的速度、机械性能与先锋风格，强化品牌与赛车文化之间的内容关联。',
  },
  {
    no: '04',
    slug: 'appsflyer-mama-2025',
    brand: 'AppsFlyer MAMA Guangzhou 2025',
    type: 'B2B Marketing / Event / Communication',
    title: 'B2B行业峰会策划与执行',
    result: '支持 1000+ 企业嘉宾参会｜整理 2000+ 客户及潜在客户信息',
    copy: '参与 AppsFlyer MAMA Guangzhou 2025 移动互联网营销峰会从会前筹备、现场执行到会后传播及客户信息整理的完整流程。',
    tags: ['B2B活动', '嘉宾管理', '项目协同'],
    theme: 'lime',
    role: 'B2B Marketing / Event / Communication',
    deliverables: 'B2B活动 / 嘉宾管理 / 项目协同 / 品牌传播 / 客户信息整理',
    gallery: ['会前筹备', '现场执行', '会后传播', '数据与线索'],
    galleryImages: [
      { src: 'appsflyer-mama-gallery-01.jpg', alt: 'AppsFlyer MAMA Guangzhou 2025 峰会活动现场' },
      { src: 'appsflyer-mama-gallery-02.jpg', alt: 'AppsFlyer MAMA Guangzhou 2025 嘉宾互动体验' },
      { src: 'appsflyer-mama-gallery-03.jpg', alt: 'AppsFlyer MAMA Guangzhou 2025 论坛议题现场' },
      { src: 'appsflyer-mama-gallery-04.jpg', alt: 'AppsFlyer MAMA Guangzhou 2025 主题演讲现场' },
    ],
    sections: [
      { title: '会前筹备', body: '整理嘉宾资料、参会名单、客户信息及活动物料，并根据活动进度持续更新人员和现场信息，为签到、嘉宾接待及现场执行建立信息基础。' },
      { title: '现场执行', body: '参与签到、嘉宾接待、现场引导、流程协同及物料管理，在大量企业嘉宾集中到场的情况下及时同步人员、流程和现场信息。' },
      { title: '会后传播', body: '整理活动传播素材，支持双语内容发布及传播效果汇总，同时参与客户数据与销售线索整理。' },
    ],
    closing: '整个项目让我接触到 B2B 活动中嘉宾管理、现场执行、品牌传播与客户信息管理之间的协同，而不仅是单一的现场活动执行。',
  },
  {
    no: '05',
    slug: 'lancome-peptide-cream',
    brand: 'Lancôme',
    type: 'Market Research / Consumer Insight / Product Marketing',
    title: '「塑颜」百肽霜产品营销策划',
    result: '市场研究 → 用户洞察 → 卖点提炼 → 传播规划',
    copy: '围绕兰蔻「塑颜」百肽霜市场推广需求，参与抗老护肤市场、目标消费人群及产品功效信息整理，并进一步梳理产品传播方向。',
    tags: ['市场研究', '用户分析', '产品卖点提炼'],
    theme: 'coral',
    role: 'Market Research / Consumer Insight / Product Marketing',
    deliverables: '市场研究 / 用户分析 / 产品卖点提炼 / 美妆营销 / 渠道规划',
    gallery: ['市场分析', '产品拆解'],
    galleryImages: [
      { src: 'lancome-gallery-01.jpg', alt: '兰蔻百肽霜市场趋势与消费者偏好分析' },
      { src: 'lancome-gallery-02.jpg', alt: '兰蔻塑颜百肽霜产品展示' },
    ],
    sections: [
      { title: '市场分析', body: '围绕抗老、紧致、修护及年轻化等功效方向整理市场与消费者需求信息，为产品传播建立基础背景。' },
      { title: '产品拆解', body: '从百肽、抗老、紧致、修护等产品信息中提炼核心功效，并将产品卖点与消费者关注的问题进行对应，而不是简单平铺所有功能。' },
      { title: '传播延展', body: '在完成市场、用户及产品信息整理后，进一步延展至传播主题、社媒种草、达人合作、门店体验、平台转化与用户反馈等触点，形成从前期研究到传播规划的基础营销框架。' },
    ],
  },
  {
    no: '06',
    slug: 'xiaohongshu-creator',
    brand: '个人小红书',
    type: 'Content Creation / Xiaohongshu / Video',
    title: '垂类内容创作与账号运营',
    result: '15+ 品牌合作｜单篇最高 3.9W+｜累计浏览及播放 10W+',
    copy: '围绕舞蹈专业、研究生日常、学习经验、观演记录、旅行与生活方式等内容持续运营个人小红书账号，独立完成从选题、脚本、拍摄、剪辑到发布与数据观察的完整内容生产。',
    tags: ['内容策划', '短视频制作', '小红书运营'],
    theme: 'pink',
    role: 'Content Creation / Xiaohongshu / Video',
    deliverables: '内容策划 / 短视频制作 / 小红书运营 / 数据观察',
    overview: '从0到1独立完成个人账号内容生产与运营，通过持续的真实平台反馈训练选题判断、内容节奏与用户兴趣洞察，并将个人内容能力进一步延展至品牌合作与商业内容共创。',
    gallery: ['内容策划', '内容制作', '品牌合作', '数据表现'],
    sections: [
      { title: '账号定位', body: '以“舞蹈研究生 / 艺术专业背景 / 生活方式分享”为核心内容方向，将专业知识、校园生活与个人体验转化为更适合小红书阅读和观看的内容，兼顾专业度与日常感。' },
      { title: '内容策划', body: '根据个人经历、用户关注点与平台内容偏好确定选题，判断采用图文或视频形式，并进一步完成标题、脚本、内容结构与拍摄方向设计。' },
      { title: '内容生产', body: '独立完成拍摄、素材筛选、视频剪辑、字幕、封面及正文包装，并根据不同题材调整内容节奏与视觉呈现，形成相对稳定的个人内容风格。' },
      { title: '数据优化', body: '发布后持续观察浏览、点赞、收藏及评论表现，对比不同题材、标题及内容形式的数据反馈，用于调整后续选题和内容表达。' },
      { title: '商业合作', body: '已与 15+ 美妆、时尚及生活方式品牌达成合作，在保留账号原有内容风格的基础上完成品牌植入与内容共创。' },
    ],
  },
]

const experience = [
  {
    period: '2025.07 — 2026.08',
    company: 'LIBPET 途龄科技',
    role: '海外整合营销 · 市场部',
    description: '独立主导品牌定位、S 新品上市、海外 KOL 矩阵与线下“未来家具沙龙”，打通品类教育、内容种草与体验转化。',
  },
  {
    period: '2025.04 — 2025.07',
    company: 'ShopCider',
    role: '市场营销实习生',
    description: '负责欧美市场广告投放、人群分层、达人矩阵与大促内容转化，推动点击率、ROI 与 GMV 增长。',
  },
  {
    period: '2024.01 — 2024.12',
    company: 'Porsche 保时捷',
    role: '市场推广实习生',
    description: '参与华北区域新车上市、试驾活动与多媒体传播，以现场体验和数据复盘连接潜客线索与成交。',
  },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#top" onClick={close} aria-label="返回首页">IH<span>.</span></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="打开导航">
        {open ? 'Close' : 'Menu'}
      </button>
      <nav className={open ? 'is-open' : ''} aria-label="主导航">
        <a href="#case" onClick={close}>核心案例</a>
        <a href="#work" onClick={close}>更多项目</a>
        <a href="#about" onClick={close}>关于我</a>
        <a className="nav-contact" href="mailto:ruimanHAN@163.com" onClick={close}>联系我 <span>↗</span></a>
      </nav>
    </header>
  )
}

function HomePage() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="top">
          <div className="hero-subtitle" aria-label="作品集类型">
            <strong>品牌策略｜整合营销｜海外KOL</strong>
            <span>Brand Strategy &amp; Integrated Marketing Portfolio</span>
          </div>
          <h1>把产品讲清楚，<br /><em>把想法做出来。</em></h1>
          <div className="hero-bottom">
            <div>
              <p>我对内容、审美与表达保持敏感。</p>
              <p className="hero-name">韩蕊蔓 Ivy Han · Shenzhen / Beijing</p>
            </div>
            <a className="scroll-cue" href="#case"><span>Explore selected work</span><b>↓</b></a>
          </div>
        </section>

        <section className="proof-strip" aria-label="关键成果">
          <div><strong>200+</strong><span>海外 KOL 资源池</span></div>
          <div><strong>260+</strong><span>B 端合作线索</span></div>
          <div><strong>1.62×</strong><span>KOL 预测 ROI</span></div>
          <div><strong>120%</strong><span>品牌曝光提升</span></div>
        </section>

        <section className="positioning reveal" aria-labelledby="positioning-title">
          <div className="section-label"><span>00</span> What I Do</div>
          <div className="positioning-grid">
            <h2 id="positioning-title">我的工作通常<br />围绕三个环节展开：</h2>
            <div className="positioning-copy">
              <p>我喜欢先弄清楚一个产品真正解决了什么问题，再思考如何把它讲清楚。我会从产品与用户需求出发，把复杂的信息转化为清晰的内容、活动和传播方案。</p>
              <ol>
                <li><b>Define｜定义价值</b><span>从产品、用户与市场中提炼品牌定位与产品核心价值。</span></li>
                <li><b>Tell｜建立表达</b><span>将复杂的技术和产品信息，转化为品牌故事、创意概念与内容语言。</span></li>
                <li><b>Go to Market｜进入市场</b><span>通过 KOL、社媒内容、线下活动与市场验证，建立从认知到转化的完整路径。</span></li>
              </ol>
            </div>
          </div>
        </section>

        <section className="case-study" id="case">
          <div className="case-cover">
            <div className="case-cover-top">
              <p>Featured Case · 2025—2026</p>
              <p>Brand × Product × GTM</p>
            </div>
            <div className="case-cover-center">
              <span className="libpet-mark">LIBPET</span>
              <h2>从“可驾驶按摩椅”<br />到“未来家具”</h2>
            </div>
            <div className="case-cover-bottom">
              <p>我的任务不是分别宣传两款产品，而是回答一个更根本的问题：</p>
              <strong>APS 与 S 为什么属于同一个品牌？</strong>
            </div>
            <div className="orbit-visual" aria-hidden="true"><i></i><b>S</b><span>APS</span></div>
          </div>

          <div className="case-body">
            <section className="case-section reveal">
              <div className="case-index">01 / Challenge</div>
              <div className="case-section-title">
                <p className="eyebrow">THE REAL PROBLEM</p>
                <h3>品牌最初面临的，<br />不是传播问题，<em>而是定义问题。</em></h3>
              </div>
              <div className="challenge-grid">
                <article><span>01</span><h4>产品线彼此割裂</h4><p>APS 面向 B 端公共空间，S 面向 C 端及 B2B2C 生活空间。公司拥有两条产品线，却没有一个能够解释二者关系的品牌逻辑。</p></article>
                <article><span>02</span><h4>品牌缺少存在理由</h4><p>对外传播主要围绕技术平台与产品功能展开，没有回答 LIBPET 为什么存在、它希望改变什么，以及用户为什么应该记住它。</p></article>
                <article><span>03</span><h4>S 的品类认知模糊</h4><p>“可以驾驶的按摩椅”虽然功能新颖，却让用户难以判断品类，也容易联想到轮椅、医疗设备或传统按摩椅。</p></article>
              </div>
            </section>

            <section className="insight-panel reveal">
              <div className="case-index">02 / Insight</div>
              <p className="insight-lead">看似无关的两款产品，<br />其实在解决同一个问题。</p>
              <div className="space-map">
                <div><small>PUBLIC SPACE</small><strong>空间尺度过大</strong><span>人需要更轻松地抵达</span></div>
                <i>+</i>
                <div><small>PRIVATE SPACE</small><strong>家具固定不动</strong><span>人需要主动适应布局</span></div>
              </div>
              <blockquote>
                <span>Brand Belief</span>
                Space adapts to people.
                <small>让空间开始适应人。</small>
              </blockquote>
            </section>

            <section className="case-section brand-system reveal">
              <div className="case-index">03 / Brand System</div>
              <div className="case-section-title">
                <p className="eyebrow">ONE BRAND LOGIC</p>
                <h3>一套品牌逻辑，<br />统一两条产品线。</h3>
              </div>
              <div className="system-grid">
                <article>
                  <span className="system-tag">APS · 公共空间</span>
                  <h4>智能接驳体验</h4>
                  <p>解决大型空间中的移动疲惫与抵达成本。</p>
                </article>
                <div className="system-core">
                  <small>Brand Role</small>
                  <strong>未来空间的<br />智能主人</strong>
                  <span>The Intelligent Host<br />of Future Spaces</span>
                </div>
                <article>
                  <span className="system-tag">S · 生活空间</span>
                  <h4>未来家具</h4>
                  <p>让家具主动响应人的位置、动线与状态。</p>
                </article>
              </div>
              <p className="brand-position">LIBPET 以智能移动体验科技，重塑现代空间中的移动、停留与抵达。</p>
            </section>

            <section className="big-idea reveal">
              <div className="big-idea-copy">
                <div className="case-index">04 / Product Reframing</div>
                <p className="eyebrow">THE BIG IDEA</p>
                <h3>Future<br />Furniture<span>.</span></h3>
                <p>把“移动”从附加功能升级为家具的新一代智能。</p>
              </div>
              <div className="big-idea-statement">
                <span>Mobility is the new intelligence of future furniture.</span>
                <strong>移动性，是未来家具的新智能。</strong>
                <div className="idea-pill-row"><i>MOVE WITH YOU</i><i>RESET YOUR STATE</i><i>BELONG IN MODERN SPACES</i></div>
              </div>
            </section>

            <section className="case-section reveal">
              <div className="case-index">05 / Go to Market</div>
              <div className="case-section-title gtm-title">
                <p className="eyebrow">FROM CATEGORY TO CONVERSION</p>
                <h3>先建立新品类，<br />再推动市场转化。</h3>
              </div>
              <div className="gtm-track">
                <article><span>01</span><h4>Define & Educate</h4><p>建立“未来家具”品类认知，统一产品定位、视觉和内容语言。</p></article>
                <article><span>02</span><h4>Validate</h4><p>在办公、设计、showroom 及 wellness 场景中进行体验验证。</p></article>
                <article><span>03</span><h4>Amplify</h4><p>通过 KOL、活动内容、用户反馈和案例素材放大市场认知。</p></article>
                <article><span>04</span><h4>Convert</h4><p>将传播内容与体验数据转化为 B 端案例、销售线索和渠道合作资产。</p></article>
              </div>
              <div className="activation-grid">
                <article>
                  <span className="activation-no">A</span>
                  <div><small>ONLINE · KOL MATRIX</small><h4>不追求泛流量，先找到能解释新品类的人</h4><p>YouTube 用于深度测评、产品演示与品类教育，Instagram 用于展示产品设计、空间美学和生活方式场景。从 0 到 1 搭建 200+ 海外 KOL 资源池，筛选首轮 Top 30。</p></div>
                </article>
                <article>
                  <span className="activation-no">B</span>
                  <div><small>OFFLINE · FUTURE FURNITURE SALON</small><h4>把新品发布会变成一场“未来家具展”</h4><p>通过家具的过去、家具的未来、产品进入空间、设计沙龙以及体验与线索承接，同时获得产品体验、品牌内容、行业讨论、B 端线索与场景验证。</p></div>
                </article>
              </div>
            </section>

            <section className="results reveal" aria-label="LIBPET 项目成果">
              <div className="results-title">
                <span>06 / Results</span>
                <h3>不只是一场新品营销，<br />而是一条完整的策略链路。</h3>
              </div>
              <div className="results-grid">
                <div><strong>200+</strong><span>海外 KOL 资源池</span></div>
                <div><strong>60%+</strong><span>达人建联响应率</span></div>
                <div><strong>260+</strong><span>潜在 B 端合作资源</span></div>
                <div><strong>1.62×</strong><span>KOL 费用预测 ROI</span></div>
              </div>
              <p>从 0 到 1 建立品牌定位、品牌人格、产品架构与品牌故事，并将 S 从“可以驾驶的按摩椅”重构为“以移动性为核心智能的未来家具”。相关定位与品牌故事进入官网、企业路演、公共展示大屏及品牌官方介绍场景。</p>
            </section>
          </div>
        </section>

        <section className="work" id="work">
          <div className="section-label"><span>02</span> Selected Work</div>
          <div className="work-heading reveal">
            <h2>同一套方法，<br />迁移到不同场景。</h2>
            <p>项目不同，但我的工作始终围绕四个动作展开：发现问题 → 转译价值 → 创造体验 → 沉淀资产。</p>
          </div>
          <div className="project-grid">
            {supportingProjects.map((project) => (
              <a
                className={`project-card ${project.theme} reveal`}
                href={`#/project/${project.slug}`}
                aria-label={`查看 ${project.brand} 项目详情`}
                key={project.brand}
              >
                <div className="project-top"><span>{project.no}</span><span>{project.type}</span></div>
                <div>
                  <p className="project-brand">{project.brand}</p>
                  <h3>{project.title}</h3>
                  <p className="project-copy">{project.copy}</p>
                </div>
                <div className="project-bottom">
                  <strong>{project.result}</strong>
                  <div>{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="method reveal" aria-labelledby="method-title">
          <div className="section-label light"><span>03</span> My Approach</div>
          <div className="method-heading"><p>从模糊问题到市场答案</p><h2 id="method-title">策略必须能够<br />进入真实世界。</h2></div>
          <div className="method-grid">
            <article><span>01</span><h3>Insight</h3><p>不止整理信息，而是通过市场、竞品、用户和数据分析，找到决定策略方向的核心矛盾。</p></article>
            <article><span>02</span><h3>Expression</h3><p>将复杂的产品、技术和品牌信息，转化为用户能够理解、记忆和分享的内容。</p></article>
            <article><span>03</span><h3>Experience</h3><p>通过活动、场景和互动机制，让品牌概念进入用户的真实感受。</p></article>
            <article><span>04</span><h3>Operation</h3><p>通过社媒矩阵、内容节奏、KOL 合作和数据复盘，将一次传播沉淀为长期品牌资产。</p></article>
          </div>
        </section>

        <section className="about" id="about">
          <div className="section-label"><span>04</span> About Ivy</div>
          <div className="about-intro reveal">
            <div className="portrait-wrap"><img src={`${import.meta.env.BASE_URL}ivy-han.png`} alt="韩蕊蔓 Ivy Han 个人照片" /></div>
            <div>
              <p className="eyebrow">BRAND STRATEGIST · INTEGRATED MARKETER</p>
              <h2>韩蕊蔓<br /><span>Ivy Han</span></h2>
              <p className="about-lead">我的核心优势，不是做过很多不同项目，而是能够面对一个尚未形成答案的问题，逐步完成品牌定义、表达、市场激活与效果验证。</p>
              <div className="skill-list"><span>DEFINE</span><span>TELL</span><span>ACTIVATE</span><span>VALIDATE</span></div>
              <a className="resume-link" href={`${import.meta.env.BASE_URL}han-ruiman-resume.pdf`} target="_blank" rel="noreferrer">查看完整简历 <span>↗</span></a>
            </div>
          </div>

          <div className="resume-grid reveal">
            <div className="resume-column">
              <h3>Experience</h3>
              {experience.map(item => (
                <article className="experience-item" key={item.company}>
                  <span>{item.period}</span>
                  <div><h4>{item.company}</h4><b>{item.role}</b><p>{item.description}</p></div>
                </article>
              ))}
            </div>
            <div className="resume-side">
              <div>
                <h3>Education</h3>
                <article><span>2022 — 2025</span><strong>北京舞蹈学院</strong><p>艺术学硕士 · 全日制</p></article>
                <article><span>2018 — 2022</span><strong>北京舞蹈学院</strong><p>舞蹈学学士 · 全日制</p></article>
              </div>
              <div>
                <h3>Language</h3>
                <p>英语 CET-6 · TOEFL 105</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-kicker">我希望继续参与的，不只是一个传播动作</div>
        <h2>品牌从定义价值，<br /><span>到进入市场。</span></h2>
        <div className="footer-links">
          <a href="mailto:ruimanHAN@163.com">ruimanHAN@163.com ↗</a>
          <a href="tel:+8615994700637">+86 159 9470 0637</a>
          <span>WeChat · 183 9976 9389</span>
        </div>
        <div className="footer-bottom"><span>© 2026 Ivy Han</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </>
  )
}

function ProjectDetail({ project }) {
  const projectIndex = supportingProjects.findIndex(item => item.slug === project.slug)
  const previous = supportingProjects[(projectIndex - 1 + supportingProjects.length) % supportingProjects.length]
  const next = supportingProjects[(projectIndex + 1) % supportingProjects.length]

  useEffect(() => {
    const originalTitle = document.title
    document.title = `${project.brand}｜Ivy Han Portfolio`
    window.scrollTo({ top: 0, behavior: 'instant' })
    return () => { document.title = originalTitle }
  }, [project])

  return (
    <>
      <Header />
      <main className={`project-detail ${project.theme}`}>
        <section className="project-detail-hero">
          <div className="project-detail-top">
            <span>{project.no} / Selected Work</span>
            <span>{project.type}</span>
          </div>
          <div className="project-detail-heading">
            <p>{project.brand}</p>
            <h1>{project.title}</h1>
          </div>
          <div className="project-detail-intro">
            <p>{project.copy}</p>
            {project.metrics ? (
              <div className="project-detail-outcome">
                <div className="project-detail-metrics" aria-label="项目数据">
                  {project.metrics.map(metric => (
                    <p key={metric.value}><b>{metric.value}</b><span>{metric.label}</span></p>
                  ))}
                </div>
                <strong>{project.result}</strong>
              </div>
            ) : <strong>{project.result}</strong>}
          </div>
          <a className="project-back" href="#work">← 返回项目列表</a>
        </section>

        <section className="project-detail-body">
          <div className="project-summary">
            <div>
              <span className="detail-label">Project Overview</span>
              <h2>{project.overview ?? <>把项目的思考过程，<br />和最终成果放在一起。</>}</h2>
            </div>
            <div className="project-facts">
              <article><span>我的职责</span><p>{project.role}</p></article>
              <article><span>核心产出</span><p>{project.deliverables}</p></article>
              <article><span>项目标签</span><div>{project.tags.map(tag => <b key={tag}>{tag}</b>)}</div></article>
            </div>
          </div>

          <section className="project-copy-sections" aria-label={`${project.brand} 项目详情`}>
            {project.sections.map((section, index) => (
              <article key={section.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{section.title}</h3>
                  <p>{section.body}</p>
                </div>
              </article>
            ))}
            {project.closing && <blockquote>{project.closing}</blockquote>}
          </section>

          <section className="project-gallery" aria-labelledby={`gallery-${project.slug}`}>
            <div className="gallery-heading">
              <div>
                <span className="detail-label">Visual Materials</span>
                <h2 id={`gallery-${project.slug}`}>项目图片</h2>
              </div>
              <p>这里已经预留图片位置。你补充素材后，我会按照项目叙事顺序替换，并调整裁切比例与说明文字。</p>
            </div>
            <div className={`gallery-grid ${project.galleryLayout === 'single' ? 'single-gallery' : ''}`}>
              {project.gallery.map((label, index) => {
                const image = project.galleryImages?.[index]
                return image ? (
                  <figure className="gallery-image" key={label}>
                    <img src={`${import.meta.env.BASE_URL}${image.src}`} alt={image.alt} loading="lazy" />
                  </figure>
                ) : (
                  <div className="gallery-placeholder" key={label}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{label}</p>
                    <small>IMAGE PLACEHOLDER</small>
                  </div>
                )
              })}
            </div>
          </section>

          <nav className="project-pagination" aria-label="项目切换">
            <a href={`#/project/${previous.slug}`}><span>← Previous</span><strong>{previous.brand}</strong></a>
            <a href={`#/project/${next.slug}`}><span>Next →</span><strong>{next.brand}</strong></a>
          </nav>
        </section>
      </main>
    </>
  )
}

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const updateRoute = () => setHash(window.location.hash)
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  const match = hash.match(/^#\/project\/([^/?]+)/)
  const project = match ? supportingProjects.find(item => item.slug === match[1]) : null

  return project ? <ProjectDetail project={project} /> : <HomePage />
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
