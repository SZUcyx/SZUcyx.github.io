export const site = {
  name: 'Chen Yunxiao',
  nameZh: '陈蕴潇',
  role: '3D Reconstruction & Spatial Intelligence',
  intro:
    'I develop geometry pipelines for point-cloud registration, mesh processing and 3DGS printing.',
  introZh: '测绘与计算机视觉交叉背景 · 三维重建 / 点云处理 / 3D Gaussian Splatting',
  phone: '158-5568-2789',
  email: '1370214582@qq.com',
  github: 'https://github.com/SZUcyx',
  resume: './assets/Chen-Yunxiao-Resume.pdf?v=1aca05ab1d90',

  aboutZh:
    '具备测绘与计算机视觉交叉背景，关注三维数据的配准、几何表达与精度验证。在其域创新科技的实习中，参与结构光扫描数据处理、Mesh 后处理、3DGS 碰撞仿真与实体打印；在研究中，围绕城市全景影像与激光点云，开展跨模态配准、稠密深度图生成与基准构建。',

  intent: {
    role: '三维重建算法工程师（3D 视觉 / 测绘 / 空间智能方向）',
    cities: ['深圳', '香港', '上海'],
  },

  education: [
    {
      school: '深圳大学',
      degree: '测绘工程 · 硕士',
      score: '均分 90',
      period: '2024.07 – 2027.07（应届生）',
      focus: '点云处理、3DGS、全景深度估计、新视角合成与跨模态配准',
    },
    {
      school: '河海大学',
      degree: '测绘工程 · 本科',
      score: 'GPA 4.1 / 5',
      period: '2020.09 – 2024.07',
      focus: '',
    },
  ],

  experience: [
    {
      org: '其域创新科技有限公司',
      title: '三维重建算法实习生',
      period: '2026.05 – 2026.08',
      summary: '围绕小物体重建，开发结构光扫描数据处理、Mesh 后处理与 3DGS 实体打印算法。',
      points: [
        '**结构光扫描**：负责光学标定后的数据处理，实现靶标圆心提取、双目极线匹配、**PnP 位姿估计**与 **ICP 重定位**，球心距误差 **0.023 mm**。',
        '**Mesh 后处理**：设计并实现 Pamo 减面 → PartField 特征聚类 → VisACD 凸包分解流程，将**数百万三角面简化至数千**，单模型处理时间控制在 **1 分钟以内**。',
        '**3DGS 实体打印**：独立实现 **3DGS 切片算法**，将高斯表示转换为逐层微体素与 PNG 序列，并对接 **Stratasys 工作流**完成打印格式转换。',
      ],
    },
    {
      org: 'PanoHK360 · 城市全景 RGB-D 数据集',
      title: '第一作者 · NeurIPS 2026 会议接收',
      period: '2026.01 – 2026.04',
      summary: '设计并实现全景影像与激光点云配准管线，用于 8K 深度图生成和全景深度估计基准构建。',
      points: [
        '参与构建约 **200 万帧**、**8000×4000** 分辨率的城市全景 RGB-D 数据，规模约 **4.72 TB**。',
        '负责局部点云提取与高空点过滤，基于 **PCA 法向估计**完成背面点剔除，并用 **HPR** 处理遮挡关系。',
        '将点云刚体变换至相机坐标系并投影至 **ERP 全景平面**，通过行自适应填充与形态学运算生成**稠密 8K 深度图**。',
        '构建 **22,751 帧** PanoHK360-Mini 基准，采用**地点隔离策略**划分训练集与验证集。',
      ],
    },
    {
      org: '激光雷达点云三维建模软件算法研究 · 校企横向项目',
      title: '核心算法研发',
      period: '2024.09 – 2025.05',
      summary: '主导校企合作项目的核心算法研发，从机载点云重建 LoD2 建筑模型。',
      points: [
        '负责点云数据预处理，采用 **PointTransformer 网络**完成建筑物点云分割与特征提取。',
        '基于 Transformer 架构设计 **"2D 角点检测 → 3D 空间提升与连接"** 的线框重建算法管线，并用数据增强提升鲁棒性。',
        '建立模型几何精度评估流程，支撑项目验收，并申请**发明专利与软件著作权各 1 项**。',
      ],
    },
    {
      org: '城市建筑 LoD3 精细化点云建模标注工程 · 技术指导',
      title: '技术指导',
      period: '2025.07 – 2025.12',
      summary: '指导城市建筑点云的 LoD3 语义标注，统一标注规范与数据质量要求。',
      points: [
        '使用 **ReCap / R3D** 等软件对原始建筑物点云进行预处理、去噪与坐标对齐。',
        '制定**标注规范**，完成结构化数据集的构建与质检，支撑相关论文撰写与发表。',
        '熟悉三维扫描设备从**硬件采集、算法处理到客户交付**的工作流程。',
      ],
    },
  ],

  research: [
    {
      title: 'PanoHK360: A Large-Scale 8K Urban Panoramic Dataset and Benchmark for Depth Estimation',
      meta: '**第一作者** · **NeurIPS 2026 会议接收** · CCF A 类',
    },
    {
      title: 'Building3D Competition',
      meta: '**CVPR 2025 Workshop** · **全球第 3 名** · 三维建筑点云重建方向',
    },
  ],

  honors: [
    '2021.06 江苏省高等学校第十八届高等数学竞赛（**本科一级 A 组一等奖**）',
    '2021.12 第十三届全国大学生数学竞赛（**非数学类一等奖**）',
    '2022.11 河海大学**优秀学生荣誉称号**、学业优秀奖学金、精神文明奖奖学金',
    '2023.07 江苏省高等学校第二十届高等数学竞赛（**本科一级 A 组一等奖**）',
    '2024–2025 深圳大学**学业优秀奖学金**（连续两学年）',
  ],

  skills: [
    { label: '编程语言', items: 'Python（熟练）· C# / MATLAB（熟悉）· C++（了解）' },
    { label: '点云处理', items: 'Open3D · CloudCompare · R3D · PointTransformer / PointNet 系列' },
    { label: '测绘软件', items: 'AutoCAD · ArcGIS · QGIS · 激光扫描仪数据处理 · LoD 建模工具链' },
    { label: '深度学习', items: 'PyTorch · OpenCV · 3DGS · 深度估计 · 新视角合成' },
    { label: 'AI 辅助开发', items: 'Claude Code · ChatGPT · 提示词编写 · Agent 辅助开发' },
    { label: '其他技能', items: 'Git · Linux · 数据集构建与质检 · CET-4 / CET-6' },
  ],
}
