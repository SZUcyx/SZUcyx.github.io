import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    slug: 'structured-light-scanning',
    index: '01',
    title: 'Structured-Light 3D Scanning',
    subtitle: '结构光扫描 · 几何标定 · 位姿估计 · 精度验证',
    summary:
      'Built the post-calibration processing pipeline for a dual-camera structured-light scanner, covering target matching, PnP pose estimation and ICP relocalization. Standard-sphere evaluation measured a 0.023 mm sphere-center distance error.',
    year: '2026',
    featured: true,
    tags: ['Structured Light', 'PnP', 'ICP', 'OpenCV', '3D Geometry'],
    metrics: [
      { value: '0.023 mm', label: 'sphere-center distance error' },
      { value: 'PnP + ICP', label: 'pose & relocalization' },
    ],
    demoType: 'pointcloud',
    model: './assets/models/sculpture.ply',
    gallery: [
      { src: './assets/images/sl-sculpture-L1.png', caption: '雕塑结构光扫描 · 条纹 L1' },
      { src: './assets/images/sl-sculpture-L2.png', caption: '雕塑结构光扫描 · 条纹 L2' },
      { src: './assets/images/sl-sphere-L1.png', caption: '标准球扫描 · 精度验证 L1' },
      { src: './assets/images/sl-sphere-L2.png', caption: '标准球扫描 · 精度验证 L2' },
    ],
    overview: [
      'Developed **post-calibration data processing** for a dual-camera structured-light scanning system during my internship. My work connected calibration-target detection, stereo matching, pose recovery and registration to a **standard-sphere accuracy evaluation**.',
    ],
    problem:
      'Correspondence errors and inconsistent scan poses affect reconstruction accuracy. The task was to recover geometrically consistent matches and poses, then quantify the result against a known reference.',
    contribution: [
      'Implemented calibration-target **circle-center extraction** and **epipolar-constrained matching** for stereo correspondence.',
      'Developed **PnP pose estimation** and **ICP relocalization** to align scans from different viewpoints.',
      'Built an evaluation workflow that fits **standard spheres** and compares their center distances with reference values.',
    ],
    pipeline: ['Target detection', 'Epipolar matching', 'PnP pose', 'ICP relocalization', 'Sphere fitting', 'Accuracy report'],
    techDetails: [
      '**Target matching:** extract circle centers from the calibration target and use epipolar geometry to constrain correspondence between the two camera images.',
      '**Pose and registration:** estimate camera pose from 2D–3D correspondences with PnP, then use ICP for relocalization against the scan geometry.',
      '**Accuracy evaluation:** fit spheres to scanned points, calculate distances between the fitted centers, and compare them with the reference center distances.',
    ],
    results: [
      'Measured a **0.023 mm sphere-center distance error** in the standard-sphere evaluation.',
      'Connected **target detection → matching → pose estimation → registration → evaluation** in one processing workflow.',
      'Demonstrated scanning on a **sculpture** and a **standard-sphere reference**, with captured stripe images shown above.',
    ],
    technicalNotes: [
      'Replace the placeholder point cloud with a public or self-captured scan before publishing.',
      'Add the exact statistical definition of the 0.023 mm error once confirmed (MAE / RMSE / max error).',
    ],
  },
  {
    slug: 'mesh-processing',
    index: '02',
    title: 'Mesh Processing Pipeline',
    subtitle: '百万级 Mesh → 轻量仿真几何',
    summary:
      'Integrated Pamo simplification, PartField grouping and VisACD convex decomposition for scanned meshes. Reduced millions of triangles to thousands, with processing under one minute per model, for collision simulation and VLM training inputs.',
    year: '2026',
    featured: true,
    tags: ['Mesh', 'Topology', 'Convex Decomposition', 'Geometry Processing'],
    metrics: [
      { value: 'Millions → Thousands', label: 'triangle count' },
      { value: '< 1 min', label: 'per-model processing' },
    ],
    demoType: 'mesh',
    model: './assets/models/mesh-simplified.ply',
    gallery: [
      { src: './assets/images/mesh-before.png', caption: '原始扫描网格（减面前）' },
      { src: './assets/images/mesh-after.png', caption: '处理后轻量网格（减面后）' },
      { src: './assets/videos/mesh-compare-000.mp4', type: 'video', caption: '减面前后对比 · 样例 000' },
      { src: './assets/videos/mesh-compare-040.mp4', type: 'video', caption: '减面前后对比 · 样例 040' },
      { src: './assets/videos/mesh-compare-041.mp4', type: 'video', caption: '减面前后对比 · 样例 041' },
    ],
    overview: [
      'Built a **mesh post-processing workflow** during my internship to prepare scanned objects for collision simulation and VLM training. It combines triangle reduction, part grouping and convex decomposition while accounting for topology and manifold constraints.',
    ],
    problem:
      'Scanned objects contain millions of triangles and lack the part structure required by downstream processing. The task was to reduce geometry cost and generate usable collision representations.',
    contribution: [
      'Designed and integrated the **Pamo → PartField → VisACD** workflow, connecting each stage through its geometry outputs.',
      'Configured mesh simplification to reduce triangle count while accounting for **topology and manifold structure**.',
      'Combined **feature-based part grouping** with **convex decomposition** to prepare assets for collision simulation and training.',
    ],
    pipeline: ['Raw mesh', 'Pamo simplification', 'PartField grouping', 'VisACD decomposition', 'Simulation-ready assets'],
    techDetails: [
      '**Simplification:** use Pamo to reduce triangle count with manifold constraints before the more expensive part-processing stages.',
      '**Part grouping:** cluster PartField features to form initial object parts for subsequent decomposition.',
      '**Collision geometry:** use VisACD to decompose the grouped geometry into convex pieces for downstream simulation.',
    ],
    results: [
      'Reduced processed scans from **millions of triangles to thousands**; the images and clips above compare the geometry before and after processing.',
      'Kept processing time to **under one minute per model** in the project workflow.',
      'Generated lightweight geometry for **collision simulation** and **VLM training** inputs.',
    ],
    technicalNotes: [
      'Best portfolio demo: side-by-side original vs processed model with triangle counts.',
      'Add Chamfer / Hausdorff / normal-consistency metrics if you have measured them.',
    ],
  },
  {
    slug: '3dgs-printing',
    index: '03',
    title: '3DGS → Physical Printing',
    subtitle: 'Gaussian 表示 → 微体素切片 → 实体打印',
    summary:
      'Designed a 3D Gaussian slicing algorithm that exports micro-voxel PNG layers with material encoding. Integrated the output with a Stratasys PolyJet workflow and demonstrated physical prints from captured 3DGS models.',
    year: '2026',
    featured: true,
    tags: ['3DGS', 'Gaussian Splatting', 'Voxelization', '3D Printing'],
    metrics: [
      { value: '3D → Layers', label: 'representation conversion' },
      { value: 'PolyJet', label: 'material-coded print workflow' },
    ],
    demoType: 'gaussian',
    gallery: [
      { src: './assets/images/3dgs-print-1.png', caption: '3DGS 切片打印结果 · 视图 1' },
      { src: './assets/images/3dgs-print-2.png', caption: '3DGS 切片打印结果 · 视图 2' },
      { src: './assets/images/collected-model.png', caption: '直接采集重建的 3DGS 模型' },
    ],
    specs: {
      title: '本项目 PolyJet 切片输出配置',
      rows: [
        { label: '层厚', value: '0.027 mm（high_mix / high_speed）· 0.014 mm（high_quality）' },
        { label: 'XY 采样', value: '600 × 300 DPI，非方形像素约 0.042 × 0.085 mm' },
        { label: '图层格式', value: 'RGB / RGBA PNG；RGB 编码材料，RGBA 输出的 Alpha 固定为 255' },
        { label: '材料映射', value: '采用 PolyJet 材料表，每像素对应一种材料；每层最多 6 种或 3 种材料，取决于打印模式' },
        { label: '边距与背景', value: '外圈边距 0.5 mm，默认黑色背景' },
        { label: '交付文件', value: '连续编号的 PNG 切片与 voxel_print_info.json，记录打印模式及材料映射' },
      ],
    },
    overview: [
      'Developed a **3DGS-to-print slicing workflow** during my internship. My work covered Gaussian slicing, micro-voxel conversion, material encoding and output preparation for a **Stratasys PolyJet** printing workflow.',
    ],
    problem:
      'Gaussian primitives encode continuous geometry and appearance. Printing requires discrete layers with a specific sampling grid and a material assignment for each voxel, so the scene must be converted into the printer workflow’s input format.',
    contribution: [
      'Independently designed and implemented the **Gaussian slicing algorithm** to sample a scene into horizontal layers.',
      'Converted each layer into **micro-voxels** and exported **PNG sequences** with per-pixel material encoding.',
      'Connected the exported slices to the **Stratasys / PolyJet** format-conversion workflow and coordinated output requirements with printing vendors.',
    ],
    pipeline: ['3D Gaussians', 'Slice plane', 'Micro-voxelization', 'PNG layer stack', 'Printer format', 'Physical object'],
    techDetails: [
      '**Layer sampling:** slice the scene along Z at the configured layer thickness and evaluate the relevant Gaussians on each layer’s micro-voxel grid.',
      '**Material encoding:** map each voxel to a PolyJet material and encode it in an RGB or RGBA PNG using the configured **600 × 300 DPI** sampling grid.',
      '**Output handoff:** export sequentially numbered slices and a **voxel_print_info.json** descriptor containing the print mode and material mapping. The output configuration is listed above.',
    ],
    results: [
      'Generated **material-coded PNG slice stacks** from 3DGS inputs.',
      'Completed the **3DGS → slices → print-format conversion → physical print** workflow with Stratasys PolyJet.',
      'Demonstrated physical printing from **self-captured 3DGS models**, with model and print images shown above.',
    ],
    technicalNotes: [
      'Ideal interactive demo: a Z slider that reveals the current slice while the 3D Gaussian scene remains visible.',
      'Use synthetic/public Gaussian data if the original company scene is confidential.',
    ],
  },
  {
    slug: 'panohk360',
    index: '04',
    title: 'PanoHK360',
    subtitle: '全景影像 × LiDAR 跨模态配准与 8K 度量深度',
    summary:
      'First-author paper accepted at NeurIPS 2026. Developed panorama–LiDAR registration and depth generation for a ~2M-frame, 4.72 TB urban RGB-D dataset at 8K resolution, and curated the 22,751-frame PanoHK360-Mini benchmark.',
    year: '2026',
    featured: true,
    tags: ['LiDAR', 'Panorama', 'ERP', 'HPR', 'Depth Estimation'],
    metrics: [
      { value: '~2M', label: 'panoramic RGB-D frames' },
      { value: '4.72 TB', label: 'dataset scale' },
      { value: '8K', label: '8000 × 4000 depth' },
    ],
    demoType: 'pointcloud',
    cover: './assets/images/panohk360-overview.png',
    detailCover: './assets/images/panohk360-depth-normal-details.png',
    overview: [
      '**PanoHK360** combines urban panoramic imagery and airborne LiDAR across Hong Kong for panoramic depth estimation. My work focused on **cross-modal registration, visibility filtering, dense metric-depth generation and benchmark curation**.',
    ],
    problem:
      'Panoramas and airborne LiDAR differ in viewpoint, sampling density and coordinate frame. Generating aligned 8K depth requires handling occlusion and sparse projections across a dataset of millions of frames.',
    contribution: [
      'Implemented local point-cloud extraction, high-altitude filtering, **PCA normal estimation**, back-face removal and **HPR** visibility filtering.',
      'Registered LiDAR geometry to the camera frame and projected it into **equirectangular (ERP) panoramas**.',
      'Generated **dense 8K metric depth** from sparse projections using row-adaptive filling and morphological closing.',
      'Curated **PanoHK360-Mini** with **21,352 training frames** and **1,399 validation frames**, using location-isolated splits to reduce geographic leakage.',
    ],
    pipeline: ['Local LiDAR', 'Normal & visibility filtering', 'Rigid transform', 'ERP projection', 'Sparse depth', 'Dense 8K depth'],
    techDetails: [
      '**Visibility filtering:** estimate local surface normals with PCA, remove back-facing points, and apply hidden-point removal (HPR) to reduce projections from occluded geometry.',
      '**Geometric alignment:** transform the point cloud into the camera coordinate frame and project it onto the ERP image to obtain sparse metric depth.',
      '**Depth generation:** apply row-adaptive filling and morphological closing to densify the projected depth at **8000 × 4000** resolution.',
    ],
    results: [
      '**First-author paper accepted at NeurIPS 2026** (CCF A).',
      'Contributed to a **~2M-frame**, **4.72 TB** panoramic RGB-D dataset at **8K (8000 × 4000)** resolution.',
      'Constructed a **22,751-frame** mini benchmark with separate geographic locations for training and validation.',
    ],
    technicalNotes: [
      'Best visual: RGB / LiDAR projection / sparse depth / dense depth comparison slider.',
      'Keep paper status and public links synchronized with the actual publication state.',
    ],
  },
  {
    slug: 'lod2-building-reconstruction',
    index: '05',
    title: 'LoD2 Building Reconstruction',
    subtitle: '机载点云 → 建筑分割 → 线框/几何重建',
    summary:
      'Led core algorithm development for a university–industry LoD2 reconstruction project. Combined PointTransformer-based building segmentation with a 2D corner detection → 3D lifting pipeline, and established geometry evaluation for project acceptance.',
    year: '2025',
    featured: false,
    tags: ['PointTransformer', 'Point Cloud', 'LoD2', 'Building Reconstruction'],
    metrics: [
      { value: 'LoD2', label: 'target detail level' },
      { value: '2D → 3D', label: 'corner lifting pipeline' },
    ],
    demoType: 'building',
    overview: [
      'Led **core algorithm development** in a university–industry project for LoD2 building reconstruction from airborne LiDAR. My responsibilities covered point-cloud preprocessing, building segmentation, wireframe reconstruction and geometry evaluation.',
    ],
    problem:
      'Airborne point clouds are noisy and unstructured. The task was to separate building geometry, recover corners and connectivity, and evaluate the resulting LoD2 models against project requirements.',
    contribution: [
      'Developed the **point-cloud preprocessing** workflow for large airborne scans.',
      'Applied **PointTransformer** features for building segmentation and feature extraction.',
      'Designed a **2D corner detection → 3D lifting → connectivity reconstruction** pipeline, with data augmentation to improve robustness.',
      'Established **geometry-accuracy evaluation** to support model validation and project acceptance.',
    ],
    pipeline: ['Airborne points', 'Preprocess', 'Building segmentation', '2D corners', '3D lifting', 'Topology / LoD2 model'],
    techDetails: [
      '**Segmentation:** use PointTransformer features to identify building points in the preprocessed airborne cloud.',
      '**Wireframe recovery:** detect corners in 2D, lift them into 3D, and recover their connectivity to form structured building geometry.',
      '**Validation:** compare reconstructed geometry with project reference measurements to assess model accuracy before delivery.',
    ],
    results: [
      'Delivered **LoD2 building reconstruction** in a project that passed acceptance.',
      'Connected point-cloud segmentation and **2D → 3D wireframe recovery** in the reconstruction workflow.',
      'Contributed to applications for **1 invention patent** and **1 software copyright** based on the project’s algorithms.',
    ],
    technicalNotes: [
      'Add the exact reconstruction metrics used in the project before presenting the evaluation section.',
    ],
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
