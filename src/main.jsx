import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const supportingProjects = [
  {
    no: '01',
    slug: 'loreal-market-research',
    brand: 'L’Oréal Group',
    type: '高端美妆市场研究',
    title: '市场研究的价值，是改变策略关注点',
    result: '从曝光转向长期用户资产',
    copy: '搭建高端美妆竞品分析框架，基于 SICAS 模型拆解兰蔻彩妆消费者旅程。核心发现是品牌曝光与市场份额具备优势，但用户忠诚度相对不足。',
    tags: ['Insight', 'SICAS', 'Strategy'],
    theme: 'coral',
    role: '市场研究 · 竞品分析 · 策略洞察',
    deliverables: '竞品分析框架、消费者旅程拆解、品牌策略机会点',
    gallery: ['研究框架', '消费者旅程', '竞品分析', '策略结论'],
  },
  {
    no: '02',
    slug: 'roger-dubuis-content',
    brand: 'Roger Dubuis',
    type: '品牌社媒内容矩阵',
    title: '把复杂制表语言，转化为用户愿意阅读的内容',
    result: '单篇 2.9W+ · 累计约 11W+',
    copy: '围绕品牌故事、产品解读、传播话题与视觉内容，将复杂机芯、材质和制表工艺转化为准确，同时保有高级感与想象空间的社媒表达。',
    tags: ['Content', 'Luxury', 'Editorial'],
    theme: 'blue',
    role: '社媒内容策略 · 编辑策划 · 产品转译',
    deliverables: '品牌故事、产品解读、传播话题与社媒内容',
    gallery: ['内容矩阵', '产品解读', '视觉内容', '传播表现'],
  },
  {
    no: '03',
    slug: 'appsflyer-brian-ip',
    brand: 'AppsFlyer',
    type: '“我的同事布莱恩”品牌 IP',
    title: 'B2B 品牌也需要进入用户的日常对话',
    result: '“我的同事布莱恩”',
    copy: '将品牌小熊转译为一位熟悉数字营销职场语境的同事，围绕开会、加班、数据波动、客户沟通及日常情绪，形成可持续延展的表情包内容体系。',
    tags: ['Creative IP', 'B2B', 'Localization'],
    theme: 'cream',
    role: '品牌 IP 本土化 · 创意策划 · 内容运营',
    deliverables: '角色设定、职场语境转译、表情包内容体系',
    gallery: ['IP 设定', '内容主题', '表情包设计', '日常传播'],
  },
  {
    no: '04',
    slug: 'appsflyer-mama-2025',
    brand: 'AppsFlyer MAMA',
    type: 'Guangzhou 2025',
    title: '大型活动是用户、内容与线索的协同',
    result: '1000+ 嘉宾 · 2000+ 客户信息',
    copy: '从活动信息统筹、嘉宾与名单管理，到现场流程、双语内容传播和会后线索归档，完成活动执行、品牌传播与客户资产沉淀的协同支持。',
    tags: ['Event', 'B2B', 'Lead Management'],
    theme: 'lime',
    role: '活动统筹 · 双语传播 · 线索管理',
    deliverables: '嘉宾与名单管理、现场流程、内容传播与会后归档',
    gallery: ['活动主视觉', '现场空间', '嘉宾与流程', '传播与复盘'],
  },
  {
    no: '05',
    slug: 'event-portfolio',
    brand: 'Event Portfolio',
    type: '赛事 × 艺术节',
    title: '不同活动场景，考验同一种复杂项目统筹能力',
    result: '嘉宾与 KOL · 现场协同 · 内容复盘',
    copy: '参与 Roger Dubuis × Lamborghini Super Trofeo 赛事观赛活动，以及北京雷动天下国际现代舞周，沉淀多方沟通、复杂流程管理与现场应变能力。',
    tags: ['Experience', 'KOL', 'Coordination'],
    theme: 'lavender',
    role: '项目统筹 · 多方协同 · 现场执行',
    deliverables: '赛事观赛活动、国际现代舞周与现场内容复盘',
    gallery: ['赛事活动', '嘉宾体验', '艺术节现场', '内容复盘'],
  },
  {
    no: '06',
    slug: 'xiaohongshu-creator',
    brand: 'Xiaohongshu',
    type: '个人账号运营',
    title: '从内容创作者视角理解平台',
    result: '15+ 品牌合作 · 累计 10W+',
    copy: '以“舞蹈研究生＋艺术专业背景＋生活方式”为核心定位，完成用户兴趣观察、选题、脚本、拍摄、剪辑、标题封面优化、发布运营与数据复盘。',
    tags: ['Creator', 'Lifestyle', 'Operation'],
    theme: 'pink',
    role: '账号定位 · 内容创作 · 数据复盘',
    deliverables: '选题脚本、拍摄剪辑、标题封面与发布运营',
    gallery: ['账号定位', '内容选题', '品牌合作', '数据表现'],
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
          <h1>让复杂产品，<br /><em>被市场理解。</em></h1>
          <div className="hero-bottom">
            <div>
              <p>我为尚未形成市场共识的品牌与新品，找到一个能够被理解、被传播，也能够被市场验证的答案。</p>
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
            <strong>{project.result}</strong>
          </div>
          <a className="project-back" href="#work">← 返回项目列表</a>
        </section>

        <section className="project-detail-body">
          <div className="project-summary">
            <div>
              <span className="detail-label">Project Overview</span>
              <h2>把项目的思考过程，<br />和最终成果放在一起。</h2>
            </div>
            <div className="project-facts">
              <article><span>我的职责</span><p>{project.role}</p></article>
              <article><span>核心产出</span><p>{project.deliverables}</p></article>
              <article><span>项目标签</span><div>{project.tags.map(tag => <b key={tag}>{tag}</b>)}</div></article>
            </div>
          </div>

          <section className="project-gallery" aria-labelledby={`gallery-${project.slug}`}>
            <div className="gallery-heading">
              <div>
                <span className="detail-label">Visual Materials</span>
                <h2 id={`gallery-${project.slug}`}>项目图片</h2>
              </div>
              <p>这里已经预留图片位置。你补充素材后，我会按照项目叙事顺序替换，并调整裁切比例与说明文字。</p>
            </div>
            <div className="gallery-grid">
              {project.gallery.map((label, index) => (
                <div className="gallery-placeholder" key={label}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{label}</p>
                  <small>IMAGE PLACEHOLDER</small>
                </div>
              ))}
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
