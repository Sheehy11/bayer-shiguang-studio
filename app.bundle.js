/* Bayer Shiguang Visual Studio | generated build */
(function bootstrapStudio(global) {
  'use strict';
  global.BayerStudio = global.BayerStudio || {
    data: {},
    prompt: {},
    services: {},
    features: {},
    state: {}
  };
})(globalThis);


(function registerUtils(studio) {
  'use strict';

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);
  }

  function textHash(value) {
    let hash = 2166136261;
    for (const character of String(value)) {
      hash ^= character.charCodeAt(0);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function clamp(value, minimum, maximum) {
    return Math.max(minimum, Math.min(maximum, Number(value)));
  }

  function imageFileFromDataTransfer(dataTransfer) {
    const files = Array.from(dataTransfer?.files || []);
    return files.find(file => /^image\//i.test(file.type)) || null;
  }

  function bindFileDropZone(zone, onFile) {
    if (!zone || typeof onFile !== 'function') return;
    let dragDepth = 0;
    const stop = event => { event.preventDefault(); event.stopPropagation(); };
    zone.addEventListener('dragenter', event => {
      stop(event);
      dragDepth += 1;
      zone.classList.add('is-dragover');
    });
    zone.addEventListener('dragover', event => {
      stop(event);
      if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy';
    });
    zone.addEventListener('dragleave', event => {
      stop(event);
      dragDepth = Math.max(0, dragDepth - 1);
      if (!dragDepth) zone.classList.remove('is-dragover');
    });
    zone.addEventListener('drop', event => {
      stop(event);
      dragDepth = 0;
      zone.classList.remove('is-dragover');
      const file = imageFileFromDataTransfer(event.dataTransfer);
      if (file) onFile(file);
      else alert('请拖入 PNG、JPG 或 WebP 图片');
    });
  }

  studio.utils = { escapeHtml, textHash, clamp, imageFileFromDataTransfer, bindFileDropZone };
})(globalThis.BayerStudio);


(function registerMaterials(studio) {
  'use strict';
  studio.data.materials = [
    {
      "id": "R-S-L",
      "title": "梳妆台日常补剂陈列",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/R-S-L.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "R-S-C",
      "title": "床品自然光单品静置",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/R-S-C.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "R-S-D",
      "title": "瓷勺双粒细节",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/R-S-D.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "R-H-L",
      "title": "梳妆台环境单瓶手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/R-H-L.jpg",
      "scene": "生活感",
      "format": "手持"
    },
    {
      "id": "R-H-C",
      "title": "灰墙盒装与单片手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/R-H-C.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "R-H-D",
      "title": "掌心多形态药片特写",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/R-H-D.jpg",
      "scene": "生活感",
      "format": "细节展示"
    },
    {
      "id": "A-S-L",
      "title": "普通床头柜生活场景",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/A-S-L.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "A-S-C",
      "title": "普通家中空木桌",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/A-S-C.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "A-S-D",
      "title": "桌面散落药片细节",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/A-S-D.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "A-H-L",
      "title": "办公桌前单包手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/A-H-L.jpg",
      "scene": "生活感",
      "format": "手持"
    },
    {
      "id": "A-H-C",
      "title": "窗帘前营养包手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/A-H-C.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "A-H-D",
      "title": "饮品旁掌心药片细节",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/A-H-D.jpg",
      "scene": "生活感",
      "format": "细节展示"
    },
    {
      "id": "RN01-P03",
      "title": "斜置补剂瓶与散落红色软胶囊",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN01-P03.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "RN01-P04",
      "title": "手持瓶盖红色软胶囊细节",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN01-P04.jpg",
      "scene": "生活感",
      "format": "细节展示"
    },
    {
      "id": "RN01-P05",
      "title": "电脑旁补剂瓶与散落红色软胶囊",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN01-P05.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "RN02-P02",
      "title": "自然光桌面瓶盖药片手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN02-P02.jpg",
      "scene": "生活感",
      "format": "细节展示"
    },
    {
      "id": "RN02-P04",
      "title": "木托盘补剂与日常小物静置",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN02-P04.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "RN03-P01",
      "title": "书桌水杯与补剂瓶静置",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN03-P01.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "RN03-P02",
      "title": "书本旁补剂瓶与木勺药片",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN03-P02.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "RN03-P03",
      "title": "木勺多色片剂细节",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN03-P03.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "RN03-P04",
      "title": "藤编垫补剂瓶与散落片剂",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN03-P04.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "RN03-P05",
      "title": "书本上补剂瓶与木勺片剂",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN03-P05.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "RN03-P06",
      "title": "藤编圆垫补剂瓶与木勺片剂",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN03-P06.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "RN03-P07",
      "title": "电脑旁倒置补剂瓶与散落片剂",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN03-P07.jpg",
      "scene": "生活感",
      "format": "细节展示"
    },
    {
      "id": "RN03-P08",
      "title": "书本叠放补剂瓶与木勺片剂",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN03-P08.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "RN05-P01",
      "title": "红色节日氛围补剂礼盒静置",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN05-P01.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "RN05-P02",
      "title": "红袖手持独立营养包与药片",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN05-P02.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "RN05-P03",
      "title": "米色背景多形态营养片平铺",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN05-P03.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "RN05-P04",
      "title": "浅木桌补剂礼盒与水杯静置",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN05-P04.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "RN05-P05",
      "title": "浅木桌双袋营养包手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN05-P05.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "RN06-P01",
      "title": "床品背景补剂软糖瓶手持",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN06-P01.jpg",
      "scene": "生活感",
      "format": "手持"
    },
    {
      "id": "RN06-P02",
      "title": "床品背景红色软糖瓶手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/RN06-P02.jpg",
      "scene": "生活感",
      "format": "手持"
    },
    {
      "id": "RN06-P03",
      "title": "床品背景蓝色软糖瓶手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN06-P03.jpg",
      "scene": "生活感",
      "format": "手持"
    },
    {
      "id": "RN07-P01",
      "title": "藤编地毯补剂瓶与蓝盘软糖静置",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/RN07-P01.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "RN07-P02",
      "title": "藤编地毯补剂瓶与瓶盖药片手持",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN07-P02.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "RN07-P03",
      "title": "藤编地毯营养片盒与泡罩板静置",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN07-P03.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "RN07-P08",
      "title": "藤编地毯日常补剂托盘陈列",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/RN07-P08.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "RN08-P01",
      "title": "菠萝背景黄色软糖瓶与果粒静置",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN08-P01.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "RN08-P02",
      "title": "自然光台面双粒软糖细节",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN08-P02.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "RN08-P03",
      "title": "自然光下黄色软糖瓶倾斜手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN08-P03.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "RN08-P04",
      "title": "自然光台面软糖瓶与瓶盖果粒",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN08-P04.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "RN08-P05",
      "title": "自然光下瓶盖软糖手持特写",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN08-P05.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "RN08-P06",
      "title": "自然光下黄色软糖瓶背标手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN08-P06.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "RN08-P07",
      "title": "橙黄色软糖颗粒微距",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN08-P07.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "RN08-P08",
      "title": "菠萝背景黄色软糖瓶静置",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN08-P08.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "RN09-P01",
      "title": "白色台面粉色补剂瓶与片剂",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN09-P01.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "RN09-P03",
      "title": "木纹台面补剂瓶与贝壳盘片剂",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN09-P03.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "RN09-P04",
      "title": "补剂瓶背标与说明页手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN09-P04.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "RN10-P02",
      "title": "木质置物台绿色软糖瓶与莓果",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN10-P02.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "RN10-P03",
      "title": "木质置物台双瓶软糖与莓果",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN10-P03.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "RN10-P04",
      "title": "木质置物台绿色软糖瓶与莓果陈列",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN10-P04.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "RN10-P05",
      "title": "双瓶盖双色软糖俯拍细节",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN10-P05.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "RN10-P06",
      "title": "白色台面双瓶软糖与藤篮",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN10-P06.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "RN11-P02",
      "title": "玻璃托盘补剂瓶与丝带静置",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN11-P02.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "RN11-P05",
      "title": "窗边补剂瓶背标手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN11-P05.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "RN12-P04",
      "title": "暖棕背景补剂瓶与白色胶囊手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN12-P04.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "RN13-P01",
      "title": "棕色背景软糖瓶与瓶盖手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN13-P01.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "RN13-P02",
      "title": "棕色背景瓶盖软糖手持特写",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN13-P02.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "RN13-P04",
      "title": "指尖双色软糖细节特写",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN13-P04.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "RN13-P05",
      "title": "棕色背景软糖瓶倾倒构图手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN13-P05.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "RN13-P06",
      "title": "棕色背景软糖瓶正标手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN13-P06.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "RN13-P07",
      "title": "棕色背景绿色软糖瓶手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN13-P07.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "RN14-P01",
      "title": "洗手台前软糖瓶倾倒手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/RN14-P01.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "RN14-P03",
      "title": "洗手台前瓶盖软糖手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/RN14-P03.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "AN01-P01",
      "title": "木质台面三瓶日常营养补剂",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN01-P01.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "AN01-P02",
      "title": "木托盘三瓶营养补剂俯拍",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN01-P02.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "AN02-P03",
      "title": "梳妆台多瓶日常补剂陈列",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN02-P03.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "AN03-P01",
      "title": "家中台面护眼补剂组合静置",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN03-P01.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "AN04-P01",
      "title": "透明收纳盒日常补剂陈列",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN04-P01.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "AN04-P02",
      "title": "补剂收纳盒前透明瓶手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN04-P02.jpg",
      "scene": "生活感",
      "format": "手持"
    },
    {
      "id": "AN04-P03",
      "title": "补剂收纳盒前深色瓶手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN04-P03.jpg",
      "scene": "生活感",
      "format": "手持"
    },
    {
      "id": "AN04-P04",
      "title": "补剂收纳盒前粉色瓶手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN04-P04.jpg",
      "scene": "生活感",
      "format": "手持"
    },
    {
      "id": "AN04-P05",
      "title": "补剂收纳盒前红色瓶手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN04-P05.jpg",
      "scene": "生活感",
      "format": "手持"
    },
    {
      "id": "AN04-P06",
      "title": "补剂收纳盒前棕色瓶手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN04-P06.jpg",
      "scene": "生活感",
      "format": "手持"
    },
    {
      "id": "AN05-P01",
      "title": "木桌日常补剂与泡罩板平铺",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN05-P01.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "AN05-P02",
      "title": "多瓶补剂背景下粉色瓶手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN05-P02.jpg",
      "scene": "生活感",
      "format": "手持"
    },
    {
      "id": "AN05-P03",
      "title": "多瓶补剂背景下蓝色瓶手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN05-P03.jpg",
      "scene": "生活感",
      "format": "手持"
    },
    {
      "id": "AN05-P04",
      "title": "多瓶补剂背景下绿色瓶手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN05-P04.jpg",
      "scene": "生活感",
      "format": "手持"
    },
    {
      "id": "AN05-P05",
      "title": "多瓶补剂背景下白色瓶手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN05-P05.jpg",
      "scene": "生活感",
      "format": "手持"
    },
    {
      "id": "AN05-P06",
      "title": "木桌三条独立营养包静置",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN05-P06.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "AN05-P07",
      "title": "木桌金色软胶囊泡罩板俯拍",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/AN05-P07.jpg",
      "scene": "生活感",
      "format": "细节展示"
    },
    {
      "id": "AN05-P08",
      "title": "多瓶补剂背景下便携药盒手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/AN05-P08.jpg",
      "scene": "生活感",
      "format": "细节展示"
    },
    {
      "id": "AN06-P01",
      "title": "木柜前粉色补剂瓶盒手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN06-P01.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "AN07-P01",
      "title": "浅色台面三瓶补剂与对应颗粒",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN07-P01.jpg",
      "scene": "摆拍感",
      "format": "静置"
    },
    {
      "id": "AN08-P02",
      "title": "木桌纸巾多形态营养片平铺",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/AN08-P02.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "AN09-P03",
      "title": "浅色桌面圆盒片剂手持",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/AN09-P03.jpg",
      "scene": "摆拍感",
      "format": "细节展示"
    },
    {
      "id": "AN10-P01",
      "title": "笔记本电脑旁多款日常补剂陈列",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN10-P01.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "AN11-P01",
      "title": "深色墙面独立包装与泡罩板手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/AN11-P01.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "AN11-P02",
      "title": "深色墙面红白补剂盒手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/AN11-P02.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "AN11-P03",
      "title": "深色墙面补剂盒与独立包装手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/AN11-P03.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "AN11-P04",
      "title": "深色墙面补剂盒与泡罩板手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/AN11-P04.jpg",
      "scene": "摆拍感",
      "format": "手持"
    },
    {
      "id": "AN12-P01",
      "title": "梳妆台多瓶黄色补剂陈列",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/AN12-P01.jpg",
      "scene": "生活感",
      "format": "静置"
    },
    {
      "id": "PIN01",
      "title": "绿瓷碗多形态营养片细节",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/PIN01.jpg",
      "scene": "摆拍感",
      "format": "细节展示",
      "sourceUrl": "https://www.pinterest.com/pin/802696333619736036/"
    },
    {
      "id": "PIN02",
      "title": "居家台面日常补剂包装陈列",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/PIN02.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.pinterest.com/pin/5488830791630872/"
    },
    {
      "id": "PIN05",
      "title": "床品背景透明补剂瓶手持",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/PIN05.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.pinterest.com/pin/862017184924306552/"
    },
    {
      "id": "PIN06",
      "title": "自然光大理石台面蓝色护肤品陈列",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/PIN06.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.pinterest.com/pin/1057923768688026327/"
    },
    {
      "id": "PIN07",
      "title": "大理石台面开盖护肤品触碰细节",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "细节展示",
      "deleted": false,
      "image": "public/by-id/PIN07.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.pinterest.com/pin/1057923768688026327/"
    },
    {
      "id": "PIN09",
      "title": "居家台面多款护肤品与面膜平铺",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/PIN09.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.pinterest.com/pin/4433299621425586/"
    },
    {
      "id": "PIN11",
      "title": "窗边木桌多款美妆产品陈列",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/PIN11.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.pinterest.com/pin/599330662938362509/"
    },
    {
      "id": "XHS05",
      "title": "电脑键盘旁补剂瓶与瓶盖胶囊",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS05.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a364c2f0000000017029ef7"
    },
    {
      "id": "XHS08",
      "title": "地毯背景补剂瓶与胶囊瓶盖",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS08.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a4225210000000006032294"
    },
    {
      "id": "XHS09",
      "title": "地毯背景补剂瓶与软糖瓶盖",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS09.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a4225210000000006032294"
    },
    {
      "id": "XHS10",
      "title": "地毯背景补剂瓶与片剂瓶盖",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS10.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a4225210000000006032294"
    },
    {
      "id": "XHS17",
      "title": "暖光桌面女性补剂 P1",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS17.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68d65de90000000014009653"
    },
    {
      "id": "XHS18",
      "title": "暖光桌面女性补剂 P2",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS18.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68d65de90000000014009653"
    },
    {
      "id": "XHS19",
      "title": "暖光桌面女性补剂 P3",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS19.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68d65de90000000014009653"
    },
    {
      "id": "XHS20",
      "title": "床品背景日常补剂 P1",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS20.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69140a3b00000000040152f2"
    },
    {
      "id": "XHS21",
      "title": "床品背景日常补剂 P2",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS21.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69140a3b00000000040152f2"
    },
    {
      "id": "XHS22",
      "title": "床品背景日常补剂 P3",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS22.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69140a3b00000000040152f2"
    },
    {
      "id": "XHS23",
      "title": "床品背景日常补剂 P4",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS23.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69140a3b00000000040152f2"
    },
    {
      "id": "XHS24",
      "title": "书桌层架多瓶补剂 P1",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS24.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/697af4ec000000002200af05"
    },
    {
      "id": "XHS25",
      "title": "藤篮女性营养包 P1",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS25.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68766034000000002203ede4"
    },
    {
      "id": "XHS26",
      "title": "藤篮女性营养包 P2",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS26.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68766034000000002203ede4"
    },
    {
      "id": "XHS27",
      "title": "藤篮女性营养包 P3",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS27.jpg",
      "scene": "摆拍感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68766034000000002203ede4"
    },
    {
      "id": "XHS28",
      "title": "藤篮女性营养包 P4",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS28.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68766034000000002203ede4"
    },
    {
      "id": "XHS29",
      "title": "梳妆台女性营养包 P2",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS29.jpg",
      "scene": "摆拍感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6703d593000000002c017558"
    },
    {
      "id": "XHS30",
      "title": "梳妆台女性营养包 P3",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS30.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6703d593000000002c017558"
    },
    {
      "id": "XHS31",
      "title": "梳妆台女性营养包 P4",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS31.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6703d593000000002c017558"
    },
    {
      "id": "XHS32",
      "title": "梳妆台女性营养包 P5",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS32.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6703d593000000002c017558"
    },
    {
      "id": "XHS33",
      "title": "浅色台面姜黄补剂 P1",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS33.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a698f68000000001c0137c0"
    },
    {
      "id": "XHS34",
      "title": "浅色台面姜黄补剂 P2",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS34.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a698f68000000001c0137c0"
    },
    {
      "id": "XHS35",
      "title": "浅色台面姜黄补剂 P3",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS35.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a698f68000000001c0137c0"
    },
    {
      "id": "XHS36",
      "title": "浅色台面姜黄补剂 P4",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS36.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a698f68000000001c0137c0"
    },
    {
      "id": "XHS37",
      "title": "浅色台面姜黄补剂 P5",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS37.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a698f68000000001c0137c0"
    },
    {
      "id": "XHS38",
      "title": "浅色台面钙片 P1",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS38.jpg",
      "scene": "摆拍感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68d8e3d8000000001300ec79"
    },
    {
      "id": "XHS39",
      "title": "浅色台面钙片 P2",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS39.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68d8e3d8000000001300ec79"
    },
    {
      "id": "XHS40",
      "title": "浅色台面钙片 P3",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS40.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68d8e3d8000000001300ec79"
    },
    {
      "id": "XHS41",
      "title": "居家台面营养饮品 P1",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS41.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68a697e8000000001d01f483"
    },
    {
      "id": "XHS42",
      "title": "居家台面营养饮品 P2",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS42.jpg",
      "scene": "摆拍感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68a697e8000000001d01f483"
    },
    {
      "id": "XHS44",
      "title": "居家台面营养饮品 P4",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS44.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68a697e8000000001d01f483"
    },
    {
      "id": "XHS45",
      "title": "墙边多瓶日常补剂 P1",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS45.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/694a3817000000001e0303bf"
    },
    {
      "id": "XHS46",
      "title": "床品背景男性营养包 P1",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS46.jpg",
      "scene": "摆拍感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/690c7965000000000402a33f"
    },
    {
      "id": "XHS47",
      "title": "床品背景男性营养包 P2",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS47.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/690c7965000000000402a33f"
    },
    {
      "id": "XHS48",
      "title": "床品背景男性营养包 P3",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS48.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/690c7965000000000402a33f"
    },
    {
      "id": "XHS49",
      "title": "居家木桌银杏补剂 P1",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS49.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a48c081000000001702c8ae"
    },
    {
      "id": "XHS50",
      "title": "居家木桌银杏补剂 P2",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS50.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a48c081000000001702c8ae"
    },
    {
      "id": "XHS51",
      "title": "居家木桌银杏补剂 P3",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS51.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a48c081000000001702c8ae"
    },
    {
      "id": "XHS52",
      "title": "居家木桌银杏补剂 P4",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS52.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a48c081000000001702c8ae"
    },
    {
      "id": "XHS53",
      "title": "居家木桌银杏补剂 P5",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS53.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a48c081000000001702c8ae"
    },
    {
      "id": "XHS54",
      "title": "居家木桌银杏补剂 P6",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS54.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a48c081000000001702c8ae"
    },
    {
      "id": "XHS55",
      "title": "居家木桌银杏补剂 P7",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS55.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a48c081000000001702c8ae"
    },
    {
      "id": "XHS56",
      "title": "木托盘肠道补剂 P2",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS56.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a71d452000000002403c0c4"
    },
    {
      "id": "XHS57",
      "title": "木托盘肠道补剂 P3",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS57.jpg",
      "scene": "摆拍感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a71d452000000002403c0c4"
    },
    {
      "id": "XHS58",
      "title": "木托盘肠道补剂 P5",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS58.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a71d452000000002403c0c4"
    },
    {
      "id": "XHS59",
      "title": "居家桌面熊形软糖 P1",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS59.jpg",
      "scene": "生活感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68a0c1dc000000001c006fba"
    },
    {
      "id": "XHS60",
      "title": "居家桌面熊形软糖 P2",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS60.jpg",
      "scene": "生活感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68a0c1dc000000001c006fba"
    },
    {
      "id": "XHS61",
      "title": "居家桌面熊形软糖 P3",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS61.jpg",
      "scene": "生活感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68a0c1dc000000001c006fba"
    },
    {
      "id": "XHS62",
      "title": "居家桌面熊形软糖 P4",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS62.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68a0c1dc000000001c006fba"
    },
    {
      "id": "XHS63",
      "title": "灰墙背景便携补剂 P1",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS63.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a33b86f000000001702d94d"
    },
    {
      "id": "XHS64",
      "title": "灰墙背景便携补剂 P3",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS64.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a33b86f000000001702d94d"
    },
    {
      "id": "XHS65",
      "title": "灰墙背景便携补剂 P6",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS65.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a33b86f000000001702d94d"
    },
    {
      "id": "XHS66",
      "title": "桌面多款日常营养品 P1",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS66.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68c271c4000000001b03cf70"
    },
    {
      "id": "XHS67",
      "title": "桌面多款日常营养品 P2",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS67.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68c271c4000000001b03cf70"
    },
    {
      "id": "XHS68",
      "title": "桌面多款日常营养品 P3",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS68.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68c271c4000000001b03cf70"
    },
    {
      "id": "XHS69",
      "title": "桌面多款日常营养品 P4",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS69.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68c271c4000000001b03cf70"
    },
    {
      "id": "XHS70",
      "title": "桌面多款日常营养品 P5",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS70.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68c271c4000000001b03cf70"
    },
    {
      "id": "XHS71",
      "title": "桌面多款日常营养品 P6",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS71.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68c271c4000000001b03cf70"
    },
    {
      "id": "XHS72",
      "title": "书桌彩色熊形软糖 P1",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS72.jpg",
      "scene": "生活感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68a43c7a000000001d00236d"
    },
    {
      "id": "XHS73",
      "title": "书桌彩色熊形软糖 P2",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS73.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68a43c7a000000001d00236d"
    },
    {
      "id": "XHS74",
      "title": "书桌彩色熊形软糖 P3",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS74.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68a43c7a000000001d00236d"
    },
    {
      "id": "XHS75",
      "title": "书桌彩色熊形软糖 P4",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS75.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68a43c7a000000001d00236d"
    },
    {
      "id": "XHS76",
      "title": "电脑旁护肝补剂 P1",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS76.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a5ed89c00000000110150c5"
    },
    {
      "id": "XHS79",
      "title": "木桌瓶装钙片 P1",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS79.jpg",
      "scene": "生活感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a5f249a0000000011016dc2"
    },
    {
      "id": "XHS80",
      "title": "木桌瓶装钙片 P2",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS80.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a5f249a0000000011016dc2"
    },
    {
      "id": "XHS81",
      "title": "桌面女性补铁产品 P2",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS81.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69f35c9e00000000380231e8"
    },
    {
      "id": "XHS83",
      "title": "桌面女性补铁产品 P4",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS83.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69f35c9e00000000380231e8"
    },
    {
      "id": "XHS84",
      "title": "暖光木桌护眼产品 P1",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS84.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a3e94260000000022015f3e"
    },
    {
      "id": "XHS85",
      "title": "暖光桌面女性软糖 P1",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS85.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68faf4000000000004028dbe"
    },
    {
      "id": "XHS86",
      "title": "暖光桌面女性软糖 P2",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS86.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68faf4000000000004028dbe"
    },
    {
      "id": "XHS87",
      "title": "暖光桌面女性软糖 P3",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS87.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68faf4000000000004028dbe"
    },
    {
      "id": "XHS88",
      "title": "暖光桌面女性软糖 P4",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS88.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68faf4000000000004028dbe"
    },
    {
      "id": "XHS89",
      "title": "冰箱前鱼油补剂 P1",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS89.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a68123d000000000402bac3"
    },
    {
      "id": "XHS90",
      "title": "冰箱前鱼油补剂 P2",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS90.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a68123d000000000402bac3"
    },
    {
      "id": "XHS91",
      "title": "冰箱前鱼油补剂 P3",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS91.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a68123d000000000402bac3"
    },
    {
      "id": "XHS92",
      "title": "冰箱前鱼油补剂 P4",
      "style": "素人随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS92.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a68123d000000000402bac3"
    },
    {
      "id": "XHS93",
      "title": "灰色织物女性维生素 P1",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS93.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69f08de1000000003501ee46"
    },
    {
      "id": "XHS94",
      "title": "藤编背景女性维生素 P2",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS94.jpg",
      "scene": "摆拍感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a59e5ef000000000f032ced"
    },
    {
      "id": "XHS95",
      "title": "藤编背景女性维生素 P3",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS95.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a59e5ef000000000f032ced"
    },
    {
      "id": "XHS96",
      "title": "粉色织物女性补剂 P1",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS96.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68b4068b000000001d028575"
    },
    {
      "id": "XHS97",
      "title": "粉色织物女性补剂 P2",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS97.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68b4068b000000001d028575"
    },
    {
      "id": "XHS98",
      "title": "粉色织物女性补剂 P3",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS98.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68b4068b000000001d028575"
    },
    {
      "id": "XHS99",
      "title": "粉色织物女性补剂 P4",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS99.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68b4068b000000001d028575"
    },
    {
      "id": "XHS100",
      "title": "粉色织物女性补剂 P5",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS100.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68b4068b000000001d028575"
    },
    {
      "id": "XHS101",
      "title": "粉色织物女性补剂 P6",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS101.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/68b4068b000000001d028575"
    },
    {
      "id": "XHS102",
      "title": "木桌多瓶女性维生素 P1",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS102.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a7edab5000000003300c5c5"
    },
    {
      "id": "XHS103",
      "title": "木桌多瓶女性维生素 P2",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS103.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a7edab5000000003300c5c5"
    },
    {
      "id": "XHS104",
      "title": "木桌多瓶女性维生素 P3",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "干净感",
      "deleted": false,
      "image": "public/by-id/XHS104.jpg",
      "scene": "摆拍感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a7edab5000000003300c5c5"
    },
    {
      "id": "XHS105",
      "title": "居家木桌补铁产品 P1",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS105.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a729a9d0000000025010559"
    },
    {
      "id": "XHS106",
      "title": "居家木桌补铁产品 P2",
      "style": "素人随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS106.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a729a9d0000000025010559"
    },
    {
      "id": "XHS107",
      "title": "床品背景女性补剂 P1",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS107.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69e1e18f000000001a024d3e"
    },
    {
      "id": "XHS108",
      "title": "床品背景女性补剂 P2",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS108.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69e1e18f000000001a024d3e"
    },
    {
      "id": "XHS109",
      "title": "床品背景女性补剂 P3",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS109.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69e1e18f000000001a024d3e"
    },
    {
      "id": "XHS110",
      "title": "床品背景女性补剂 P4",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS110.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69e1e18f000000001a024d3e"
    },
    {
      "id": "XHS111",
      "title": "床品背景女性补剂 P5",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS111.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69e1e18f000000001a024d3e"
    },
    {
      "id": "XHS112",
      "title": "床品背景女性补剂 P6",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS112.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69e1e18f000000001a024d3e"
    },
    {
      "id": "XHS113",
      "title": "床品背景女性补剂 P7",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS113.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69e1e18f000000001a024d3e"
    },
    {
      "id": "XHS114",
      "title": "书桌前日常维生素 P1",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS114.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a5f3e67000000001b01c813"
    },
    {
      "id": "XHS115",
      "title": "电脑前多瓶日常补剂 P1",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS115.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69b3a2b4000000001a02b915"
    },
    {
      "id": "XHS116",
      "title": "暖光书桌补剂瓶与瓶盖胶囊",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "摆拍感",
      "deleted": false,
      "image": "public/by-id/XHS116.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a6b1dd50000000005021bf0"
    },
    {
      "id": "XHS117",
      "title": "暖光书桌补剂瓶手持展示",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "摆拍感",
      "deleted": false,
      "image": "public/by-id/XHS117.jpg",
      "scene": "生活感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a6b1dd50000000005021bf0"
    },
    {
      "id": "XHS118",
      "title": "暖光书桌掌心胶囊细节",
      "style": "精致随手PO",
      "shot": "细节展示",
      "content": "摆拍感",
      "deleted": false,
      "image": "public/by-id/XHS118.jpg",
      "scene": "生活感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a6b1dd50000000005021bf0"
    },
    {
      "id": "XHS119",
      "title": "木桌磷虾油瓶单品静置",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "摆拍感",
      "deleted": false,
      "image": "public/by-id/XHS119.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/699eb48e000000001600a36b"
    },
    {
      "id": "XHS120",
      "title": "木勺深色软胶囊细节",
      "style": "精致随手PO",
      "shot": "细节展示",
      "content": "摆拍感",
      "deleted": false,
      "image": "public/by-id/XHS120.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/699eb48e000000001600a36b"
    },
    {
      "id": "XHS121",
      "title": "掌心瓶盖软胶囊细节",
      "style": "精致随手PO",
      "shot": "细节展示",
      "content": "摆拍感",
      "deleted": false,
      "image": "public/by-id/XHS121.jpg",
      "scene": "摆拍感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/699eb48e000000001600a36b"
    },
    {
      "id": "XHS122",
      "title": "补剂瓶背标手持展示",
      "style": "精致随手PO",
      "shot": "手持",
      "content": "摆拍感",
      "deleted": false,
      "image": "public/by-id/XHS122.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/699eb48e000000001600a36b"
    },
    {
      "id": "XHS123",
      "title": "红色纸艺旁补剂瓶与软胶囊",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "摆拍感",
      "deleted": false,
      "image": "public/by-id/XHS123.jpg",
      "scene": "摆拍感",
      "format": "手持",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/699eb48e000000001600a36b"
    },
    {
      "id": "XHS124",
      "title": "红色蜡烛旁补剂瓶与木勺",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "摆拍感",
      "deleted": false,
      "image": "public/by-id/XHS124.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/699eb48e000000001600a36b"
    },
    {
      "id": "XHS125",
      "title": "白色桌面补剂瓶与瓶盖药片",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS125.jpg",
      "scene": "摆拍感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6891bb37000000000403f6ed"
    },
    {
      "id": "XHS126",
      "title": "书本旁鱼油瓶与胶囊碗",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "摆拍感",
      "deleted": false,
      "image": "public/by-id/XHS126.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69b222af000000000601e51f"
    },
    {
      "id": "XHS127",
      "title": "白衣手持鱼油与水杯",
      "style": "精致随手PO",
      "shot": "细节展示",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS127.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69b222af000000000601e51f"
    },
    {
      "id": "XHS128",
      "title": "白瓷碗金色软胶囊细节",
      "style": "精致随手PO",
      "shot": "细节展示",
      "content": "摆拍感",
      "deleted": false,
      "image": "public/by-id/XHS128.jpg",
      "scene": "摆拍感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69b222af000000000601e51f"
    },
    {
      "id": "XHS129",
      "title": "书页旁胶囊碗与水杯",
      "style": "精致随手PO",
      "shot": "细节展示",
      "content": "摆拍感",
      "deleted": false,
      "image": "public/by-id/XHS129.jpg",
      "scene": "摆拍感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69b222af000000000601e51f"
    },
    {
      "id": "XHS130",
      "title": "书本水杯旁鱼油瓶静置",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "摆拍感",
      "deleted": false,
      "image": "public/by-id/XHS130.jpg",
      "scene": "摆拍感",
      "format": "细节展示",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69b222af000000000601e51f"
    },
    {
      "id": "XHS131",
      "title": "书本旁鱼油瓶近景静置",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "摆拍感",
      "deleted": false,
      "image": "public/by-id/XHS131.jpg",
      "scene": "摆拍感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69b222af000000000601e51f"
    },
    {
      "id": "XHS132",
      "title": "沙发背景日常补剂与电子用品",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "生活感",
      "deleted": false,
      "image": "public/by-id/XHS132.jpg",
      "scene": "生活感",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a59f8b9000000000e03601c"
    },
    {
      "id": "XHS133",
      "title": "胡桃木圆桌与居家软装背景",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "场景",
      "deleted": false,
      "image": "public/by-id/XHS133.jpg",
      "scene": "背景",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/65e13cde000000000b019fa8"
    },
    {
      "id": "XHS139",
      "title": "胡桃木书桌电脑与香氛布景",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "场景",
      "deleted": false,
      "image": "public/by-id/XHS139.jpg",
      "scene": "背景",
      "format": "静置",
      "sourceUrl": "https://www.xiaohongshu.com/discovery/item/681dc1530000000021005165"
    },
    {
      "id": "XHS149",
      "title": "木质香水架与美妆用品梳妆台场景",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "场景",
      "deleted": false,
      "image": "public/by-id/XHS149.png",
      "scene": "背景",
      "format": "静置",
      "sourceUrl": "https://docs.google.com/document/d/16zVsSCIYefG-jUvuL6cLdhsQl8vAlXsW8V-dXnVXwgc"
    },
    {
      "id": "XHS150",
      "title": "白色梳妆台亚克力收纳与镜子场景",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "场景",
      "deleted": false,
      "image": "public/by-id/XHS150.png",
      "scene": "背景",
      "format": "静置",
      "sourceUrl": "https://docs.google.com/document/d/16zVsSCIYefG-jUvuL6cLdhsQl8vAlXsW8V-dXnVXwgc"
    },
    {
      "id": "PROPBG-VANITY-01",
      "title": "梳妆台背景 1",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-VANITY-01.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-VANITY-02",
      "title": "梳妆台背景 2",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-VANITY-02.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-VANITY-03",
      "title": "梳妆台背景 3",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-VANITY-03.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-VANITY-04",
      "title": "梳妆台背景 4",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-VANITY-04.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-DESK-01",
      "title": "书桌背景 1",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-DESK-01.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-DESK-02",
      "title": "书桌背景 2",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-DESK-02.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-DINING-01",
      "title": "餐桌背景 1",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-DINING-01.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-DINING-02",
      "title": "餐桌背景 2",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-DINING-02.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-DINING-03",
      "title": "餐桌背景 3",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-DINING-03.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-DINING-04",
      "title": "餐桌背景 4",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-DINING-04.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-DINING-05",
      "title": "餐桌背景 5",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-DINING-05.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-DINING-06",
      "title": "餐桌背景 6",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-DINING-06.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-DINING-07",
      "title": "餐桌背景 7",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-DINING-07.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-DINING-08",
      "title": "餐桌背景 8",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-DINING-08.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-DINING-09",
      "title": "餐桌背景 9",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-DINING-09.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-DINING-10",
      "title": "餐桌背景 10",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-DINING-10.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-DINING-11",
      "title": "餐桌背景 11",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-DINING-11.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-DINING-12",
      "title": "餐桌背景 12",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-DINING-12.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-DINING-13",
      "title": "餐桌背景 13",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-DINING-13.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-DINING-14",
      "title": "餐桌背景 14",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-DINING-14.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-BEDSIDE-01",
      "title": "床头柜背景 1",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-BEDSIDE-01.jpg",
      "scene": "背景",
      "format": "静置"
    },
    {
      "id": "PROPBG-BEDSIDE-02",
      "title": "床头柜背景 2",
      "style": "精致随手PO",
      "shot": "静置",
      "content": "背景",
      "deleted": false,
      "image": "public/by-id/PROPBG-BEDSIDE-02.jpg",
      "scene": "背景",
      "format": "静置"
    }
  ];
})(globalThis.BayerStudio);



(function registerNewMaterials(studio) {
  'use strict';
  studio.data.materials.push(...[
  {
    "id": "XHSNEW001_P01",
    "title": "35➕裸肤状态｜普通人悟出的抗衰思路 · p1",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW001_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a86b8580000000017002282?source=webshare&xhsshare=pc_web&xsec_token=CBVDJlN5QtiEPzswKJETUijrQ8wZOSdzK3o6sBX7y_-SI=&xsec_source=pc_share",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ]
  },
  {
    "id": "XHSNEW002_P03",
    "title": "35➕裸肤状态｜普通人悟出的抗衰思路 · p3",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW002_P03.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a86b8580000000017002282?source=webshare&xhsshare=pc_web&xsec_token=CBVDJlN5QtiEPzswKJETUijrQ8wZOSdzK3o6sBX7y_-SI=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW005_P01",
    "title": "丸辣，脸比脖子白2个度。。。 · p1",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW005_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a5ee7a6000000001101cc62?source=webshare&xhsshare=pc_web&xsec_token=CB0LymYJQHkvNwrJ2VviqzLi3xII4vOFNT45UlDNj_qQ0=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW007_P03",
    "title": "油痘肌完全爱用！ · p3",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW007_P03.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a603ecb00000000140049df?source=webshare&xhsshare=pc_web&xsec_token=CBLD2kgEOoNifDmSpv8XbLZDkGQn-S21qLlEzwkAvrw54=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW008_P01",
    "title": "欧莱雅集团的王牌B5，居然给了美宝莲？ · p1",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW008_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a4de24d0000000011005c16?source=webshare&xhsshare=pc_web&xsec_token=CBChrPuyTIU8ehrPkxfvzk1BXmvClmzZrJL0U_c5OCwq4=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW009_P02",
    "title": "欧莱雅集团的王牌B5，居然给了美宝莲？ · p2",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW009_P02.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a4de24d0000000011005c16?source=webshare&xhsshare=pc_web&xsec_token=CBChrPuyTIU8ehrPkxfvzk1BXmvClmzZrJL0U_c5OCwq4=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW010_P01",
    "title": "夏日急速养嫩亮好皮好物分享！ · p1",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW010_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a5ddc770000000005038342?source=webshare&xhsshare=pc_web&xsec_token=CBGXsogfG0a1lv-5qRTf6fmRdKwsDZLAvzwZaCgls0Q2U=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW012_P04",
    "title": "夏日急速养嫩亮好皮好物分享！ · p4",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW012_P04.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a5ddc770000000005038342?source=webshare&xhsshare=pc_web&xsec_token=CBGXsogfG0a1lv-5qRTf6fmRdKwsDZLAvzwZaCgls0Q2U=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW013_P05",
    "title": "夏日急速养嫩亮好皮好物分享！ · p5",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW013_P05.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a5ddc770000000005038342?source=webshare&xhsshare=pc_web&xsec_token=CBGXsogfG0a1lv-5qRTf6fmRdKwsDZLAvzwZaCgls0Q2U=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW014_P06",
    "title": "夏日急速养嫩亮好皮好物分享！ · p6",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW014_P06.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a5ddc770000000005038342?source=webshare&xhsshare=pc_web&xsec_token=CBGXsogfG0a1lv-5qRTf6fmRdKwsDZLAvzwZaCgls0Q2U=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW015_P07",
    "title": "夏日急速养嫩亮好皮好物分享！ · p7",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW015_P07.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a5ddc770000000005038342?source=webshare&xhsshare=pc_web&xsec_token=CBGXsogfG0a1lv-5qRTf6fmRdKwsDZLAvzwZaCgls0Q2U=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW016_P01",
    "title": "秋冬修护必备！🍁 · p1",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW016_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a881c8c00000000050320df?source=webshare&xhsshare=pc_web&xsec_token=CB3uGvzmw72HMilmSt6Ge3nOsR_TyMtTGJeIkZ0YWTqYw=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW017_P02",
    "title": "秋冬修护必备！🍁 · p2",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW017_P02.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a881c8c00000000050320df?source=webshare&xhsshare=pc_web&xsec_token=CB3uGvzmw72HMilmSt6Ge3nOsR_TyMtTGJeIkZ0YWTqYw=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW018_P03",
    "title": "秋冬修护必备！🍁 · p3",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW018_P03.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a881c8c00000000050320df?source=webshare&xhsshare=pc_web&xsec_token=CB3uGvzmw72HMilmSt6Ge3nOsR_TyMtTGJeIkZ0YWTqYw=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW023_P02",
    "title": "能让项目后炭⚫️脸一键撤回的炸裂精华 · p2",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW023_P02.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a8016f6000000002403f649?source=webshare&xhsshare=pc_web&xsec_token=CBc4gEugwFWn4jzUyDbS7QgONwfu42R4-x0pWz-HjU9Jw=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW024_P01",
    "title": "投资回报率最高的两个！！ · p1",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW024_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a193f6f000000003502f40e?source=webshare&xhsshare=pc_web&xsec_token=CBHtnBPWzgfe1thZAQTGw78Hw4rEexwgsye7uz7a3yZOc=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW025_P02",
    "title": "投资回报率最高的两个！！ · p2",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW025_P02.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a193f6f000000003502f40e?source=webshare&xhsshare=pc_web&xsec_token=CBHtnBPWzgfe1thZAQTGw78Hw4rEexwgsye7uz7a3yZOc=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW026_P06",
    "title": "投资回报率最高的两个！！ · p6",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW026_P06.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a193f6f000000003502f40e?source=webshare&xhsshare=pc_web&xsec_token=CBHtnBPWzgfe1thZAQTGw78Hw4rEexwgsye7uz7a3yZOc=&xsec_source=pc_share",
    "detailTags": [
      "手持"
    ],
    "productForms": [
      "药板"
    ]
  },
  {
    "id": "XHSNEW027_P01",
    "title": "让人又爱又恨的absolution：热门单品怎么选？ · p1",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW027_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a881bc0000000001d01e73b?source=webshare&xhsshare=pc_web&xsec_token=CB3uGvzmw72HMilmSt6Ge3nOHf_B-ekxS-cfzIThBRO_A=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW036_P01",
    "title": "空瓶真实反馈，这把眼周真的稳了。 · p1",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW036_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a7c027f0000000008011d91?source=webshare&xhsshare=pc_web&xsec_token=CB70OEXgKX2S1fYVqlZOxQhlLBF6EyfpSDCx54-HcxGUc=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW038_P01",
    "title": "避雷避雷😭 口服胶原真的别乱买！ · p1",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW038_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69e739a1000000001a031241?source=webshare&xhsshare=pc_web&xsec_token=CBWHDwdtB_EmWTvzACEbt6oKGZjhfDMXUZDH9GIzcIhtA=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW039_P02",
    "title": "避雷避雷😭 口服胶原真的别乱买！ · p2",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW039_P02.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69e739a1000000001a031241?source=webshare&xhsshare=pc_web&xsec_token=CBWHDwdtB_EmWTvzACEbt6oKGZjhfDMXUZDH9GIzcIhtA=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW040_P03",
    "title": "避雷避雷😭 口服胶原真的别乱买！ · p3",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW040_P03.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69e739a1000000001a031241?source=webshare&xhsshare=pc_web&xsec_token=CBWHDwdtB_EmWTvzACEbt6oKGZjhfDMXUZDH9GIzcIhtA=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW042_P05",
    "title": "避雷避雷😭 口服胶原真的别乱买！ · p5",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW042_P05.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69e739a1000000001a031241?source=webshare&xhsshare=pc_web&xsec_token=CBWHDwdtB_EmWTvzACEbt6oKGZjhfDMXUZDH9GIzcIhtA=&xsec_source=pc_share",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ]
  },
  {
    "id": "XHSNEW043_P06",
    "title": "避雷避雷😭 口服胶原真的别乱买！ · p6",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW043_P06.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69e739a1000000001a031241?source=webshare&xhsshare=pc_web&xsec_token=CBWHDwdtB_EmWTvzACEbt6oKGZjhfDMXUZDH9GIzcIhtA=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW044_P07",
    "title": "避雷避雷😭 口服胶原真的别乱买！ · p7",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW044_P07.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/69e739a1000000001a031241?source=webshare&xhsshare=pc_web&xsec_token=CBWHDwdtB_EmWTvzACEbt6oKGZjhfDMXUZDH9GIzcIhtA=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW045_P01",
    "title": "🫧分享我的夏日凉感短途洗漱包 · p1",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW045_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a7a89830000000005029a72?source=webshare&xhsshare=pc_web&xsec_token=CBPMYgKGq41AlV5CiT6vgLa_citee0841TtGTCkDQ4jKk=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW046_P02",
    "title": "🫧分享我的夏日凉感短途洗漱包 · p2",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW046_P02.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a7a89830000000005029a72?source=webshare&xhsshare=pc_web&xsec_token=CBPMYgKGq41AlV5CiT6vgLa_citee0841TtGTCkDQ4jKk=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW047_P03",
    "title": "🫧分享我的夏日凉感短途洗漱包 · p3",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW047_P03.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a7a89830000000005029a72?source=webshare&xhsshare=pc_web&xsec_token=CBPMYgKGq41AlV5CiT6vgLa_citee0841TtGTCkDQ4jKk=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW048_P04",
    "title": "🫧分享我的夏日凉感短途洗漱包 · p4",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW048_P04.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a7a89830000000005029a72?source=webshare&xhsshare=pc_web&xsec_token=CBPMYgKGq41AlV5CiT6vgLa_citee0841TtGTCkDQ4jKk=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW049_P06",
    "title": "🫧分享我的夏日凉感短途洗漱包 · p6",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW049_P06.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a7a89830000000005029a72?source=webshare&xhsshare=pc_web&xsec_token=CBPMYgKGq41AlV5CiT6vgLa_citee0841TtGTCkDQ4jKk=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW050_P07",
    "title": "🫧分享我的夏日凉感短途洗漱包 · p7",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW050_P07.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a7a89830000000005029a72?source=webshare&xhsshare=pc_web&xsec_token=CBPMYgKGq41AlV5CiT6vgLa_citee0841TtGTCkDQ4jKk=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW051_P01",
    "title": "夏天强推这俩，嘭脸透亮的程度真的很邪乎。。 · p1",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW051_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a43b23400000000060219fa?source=webshare&xhsshare=pc_web&xsec_token=CBTFQr2aydE40_QX-XrSQGrulVjePIBB4trFs0fezDy8Y=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW052_P01",
    "title": "英国🇬🇧淡纹巨巨牛的黑科技… · p1",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW052_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a1c084a000000003701f0c0?source=webshare&xhsshare=pc_web&xsec_token=CB5Z4RCWBIKt6qw1cKGfr9kWreK26LFbjC095iSVQJoGw=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW054_P01",
    "title": "无限回购的本命精华油，抗老绝了！ · p1",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW054_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a1e4b520000000037036de6?source=webshare&xhsshare=pc_web&xsec_token=CBkd1R3qiQ0ZIpoYi4UHaa_xtI3G_hF3tnv3PTIeK610U=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW055_P02",
    "title": "无限回购的本命精华油，抗老绝了！ · p2",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW055_P02.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a1e4b520000000037036de6?source=webshare&xhsshare=pc_web&xsec_token=CBkd1R3qiQ0ZIpoYi4UHaa_xtI3G_hF3tnv3PTIeK610U=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW056_P02",
    "title": "懒人必备！一瓶三用的精简主义护肤乳液 · p2",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW056_P02.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a3355ff000000000602261e?source=webshare&xhsshare=pc_web&xsec_token=CBVMc9TdgztOzWO6gt-mgZD57m0oXAup5ksv01SWfj14I=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW059_P07",
    "title": "懒人必备！一瓶三用的精简主义护肤乳液 · p7",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW059_P07.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a3355ff000000000602261e?source=webshare&xhsshare=pc_web&xsec_token=CBVMc9TdgztOzWO6gt-mgZD57m0oXAup5ksv01SWfj14I=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW060_P01",
    "title": "🫧购物分享 新家入住的洗护好物们 · p1",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW060_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a802fe70000000006006d4f?source=webshare&xhsshare=pc_web&xsec_token=CBc4gEugwFWn4jzUyDbS7QgK7v8PqB0_J5ZwACjOAab38=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW061_P02",
    "title": "🫧购物分享 新家入住的洗护好物们 · p2",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW061_P02.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a802fe70000000006006d4f?source=webshare&xhsshare=pc_web&xsec_token=CBc4gEugwFWn4jzUyDbS7QgK7v8PqB0_J5ZwACjOAab38=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW062_P03",
    "title": "🫧购物分享 新家入住的洗护好物们 · p3",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW062_P03.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a802fe70000000006006d4f?source=webshare&xhsshare=pc_web&xsec_token=CBc4gEugwFWn4jzUyDbS7QgK7v8PqB0_J5ZwACjOAab38=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW063_P04",
    "title": "🫧购物分享 新家入住的洗护好物们 · p4",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW063_P04.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a802fe70000000006006d4f?source=webshare&xhsshare=pc_web&xsec_token=CBc4gEugwFWn4jzUyDbS7QgK7v8PqB0_J5ZwACjOAab38=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW064_P05",
    "title": "🫧购物分享 新家入住的洗护好物们 · p5",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW064_P05.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a802fe70000000006006d4f?source=webshare&xhsshare=pc_web&xsec_token=CBc4gEugwFWn4jzUyDbS7QgK7v8PqB0_J5ZwACjOAab38=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW065_P06",
    "title": "🫧购物分享 新家入住的洗护好物们 · p6",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW065_P06.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a802fe70000000006006d4f?source=webshare&xhsshare=pc_web&xsec_token=CBc4gEugwFWn4jzUyDbS7QgK7v8PqB0_J5ZwACjOAab38=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW066_P07",
    "title": "🫧购物分享 新家入住的洗护好物们 · p7",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW066_P07.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a802fe70000000006006d4f?source=webshare&xhsshare=pc_web&xsec_token=CBc4gEugwFWn4jzUyDbS7QgK7v8PqB0_J5ZwACjOAab38=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW067_P08",
    "title": "🫧购物分享 新家入住的洗护好物们 · p8",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW067_P08.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a802fe70000000006006d4f?source=webshare&xhsshare=pc_web&xsec_token=CBc4gEugwFWn4jzUyDbS7QgK7v8PqB0_J5ZwACjOAab38=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW068_P09",
    "title": "🫧购物分享 新家入住的洗护好物们 · p9",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW068_P09.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a802fe70000000006006d4f?source=webshare&xhsshare=pc_web&xsec_token=CBc4gEugwFWn4jzUyDbS7QgK7v8PqB0_J5ZwACjOAab38=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW069_P10",
    "title": "🫧购物分享 新家入住的洗护好物们 · p10",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW069_P10.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a802fe70000000006006d4f?source=webshare&xhsshare=pc_web&xsec_token=CBc4gEugwFWn4jzUyDbS7QgK7v8PqB0_J5ZwACjOAab38=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW070_P01",
    "title": "长期主义会回购的一些爱用好物（香香版） · p1",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW070_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a829f6e000000002500aa14?source=webshare&xhsshare=pc_web&xsec_token=CBja8Phy_ygx59002F80fnw-er1iWEWvOppk4UMdZwlkg=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW077_P01",
    "title": "冷白皮如喝水一样简单💦 · p1",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW077_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a88233b000000002802162a?source=webshare&xhsshare=pc_web&xsec_token=CB3uGvzmw72HMilmSt6Ge3nOmjCej59VM2cDla5wL1x4A=&xsec_source=pc_share",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ]
  },
  {
    "id": "XHSNEW078_P02",
    "title": "冷白皮如喝水一样简单💦 · p2",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW078_P02.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a88233b000000002802162a?source=webshare&xhsshare=pc_web&xsec_token=CB3uGvzmw72HMilmSt6Ge3nOmjCej59VM2cDla5wL1x4A=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW079_P03",
    "title": "冷白皮如喝水一样简单💦 · p3",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW079_P03.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a88233b000000002802162a?source=webshare&xhsshare=pc_web&xsec_token=CB3uGvzmw72HMilmSt6Ge3nOmjCej59VM2cDla5wL1x4A=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW081_P02",
    "title": "30+中女，对身体护理不再将就 · p2",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW081_P02.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a73062200000000250035c9?source=webshare&xhsshare=pc_web&xsec_token=CBM-QryX4riCvYBVFk_MRr5RXAY-j0fo2UW-mTt9n9X9k=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW084_P01",
    "title": "8月跟着ins博主学怎么拍好物 · p1",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW084_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a709a03000000002500b9b4?source=webshare&xhsshare=pc_web&xsec_token=CB2w1GeE5daf4WO-u_ocrS4WVfN7ZzTxU3xVj_5mmBSMk=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW085_P02",
    "title": "8月跟着ins博主学怎么拍好物 · p2",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW085_P02.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a709a03000000002500b9b4?source=webshare&xhsshare=pc_web&xsec_token=CB2w1GeE5daf4WO-u_ocrS4WVfN7ZzTxU3xVj_5mmBSMk=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW086_P03",
    "title": "8月跟着ins博主学怎么拍好物 · p3",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW086_P03.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a709a03000000002500b9b4?source=webshare&xhsshare=pc_web&xsec_token=CB2w1GeE5daf4WO-u_ocrS4WVfN7ZzTxU3xVj_5mmBSMk=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW094_P05",
    "title": "姐的身体护理大法（从头到脚 · p5",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW094_P05.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a898fc1000000002b002482?source=webshare&xhsshare=pc_web&xsec_token=CBxBx3t1YPPJbodLd2ys4MQiy1bHWa4ez-Z1YvYzTU8bE=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW095_P06",
    "title": "姐的身体护理大法（从头到脚 · p6",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW095_P06.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a898fc1000000002b002482?source=webshare&xhsshare=pc_web&xsec_token=CBxBx3t1YPPJbodLd2ys4MQiy1bHWa4ez-Z1YvYzTU8bE=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW096_P07",
    "title": "姐的身体护理大法（从头到脚 · p7",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW096_P07.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a898fc1000000002b002482?source=webshare&xhsshare=pc_web&xsec_token=CBxBx3t1YPPJbodLd2ys4MQiy1bHWa4ez-Z1YvYzTU8bE=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW097_P01",
    "title": "我写，香香浴室离不开的好东西 · p1",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW097_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a882ade0000000033018be9?source=webshare&xhsshare=pc_web&xsec_token=CB3uGvzmw72HMilmSt6Ge3nK26LDTKy-zL8Xwuu4gEt_o=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW098_P02",
    "title": "我写，香香浴室离不开的好东西 · p2",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW098_P02.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a882ade0000000033018be9?source=webshare&xhsshare=pc_web&xsec_token=CB3uGvzmw72HMilmSt6Ge3nK26LDTKy-zL8Xwuu4gEt_o=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW099_P04",
    "title": "我写，香香浴室离不开的好东西 · p4",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW099_P04.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a882ade0000000033018be9?source=webshare&xhsshare=pc_web&xsec_token=CB3uGvzmw72HMilmSt6Ge3nK26LDTKy-zL8Xwuu4gEt_o=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW100_P05",
    "title": "我写，香香浴室离不开的好东西 · p5",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW100_P05.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a882ade0000000033018be9?source=webshare&xhsshare=pc_web&xsec_token=CB3uGvzmw72HMilmSt6Ge3nK26LDTKy-zL8Xwuu4gEt_o=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW101_P06",
    "title": "我写，香香浴室离不开的好东西 · p6",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW101_P06.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a882ade0000000033018be9?source=webshare&xhsshare=pc_web&xsec_token=CB3uGvzmw72HMilmSt6Ge3nK26LDTKy-zL8Xwuu4gEt_o=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW102_P07",
    "title": "我写，香香浴室离不开的好东西 · p7",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW102_P07.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a882ade0000000033018be9?source=webshare&xhsshare=pc_web&xsec_token=CB3uGvzmw72HMilmSt6Ge3nK26LDTKy-zL8Xwuu4gEt_o=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW103_P01",
    "title": "中女偷偷逆袭的狠货  · p1",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW103_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a87c5bf00000000330260c1?source=webshare&xhsshare=pc_web&xsec_token=CBbx_PuT9mtWfH_7_9cCw-5ZriDH49V4eND_O7GdoROjM=&xsec_source=pc_share",
    "detailTags": [
      "手持",
      "带产品包装"
    ],
    "productForms": [
      "包装盒",
      "药板"
    ]
  },
  {
    "id": "XHSNEW104_P02",
    "title": "中女偷偷逆袭的狠货  · p2",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW104_P02.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a87c5bf00000000330260c1?source=webshare&xhsshare=pc_web&xsec_token=CBbx_PuT9mtWfH_7_9cCw-5ZriDH49V4eND_O7GdoROjM=&xsec_source=pc_share",
    "detailTags": [
      "手持",
      "带产品包装"
    ],
    "productForms": [
      "包装盒",
      "药板"
    ]
  },
  {
    "id": "XHSNEW106_P01",
    "title": "精致牛马如何好好养自己 · p1",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW106_P01.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a8524eb000000003301c413?source=webshare&xhsshare=pc_web&xsec_token=CBza97kEf5i08dajWd6NJZLYsNiHYcAqDFvOmHHajuZFw=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW107_P02",
    "title": "精致牛马如何好好养自己 · p2",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "shot": "手持",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW107_P02.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a8524eb000000003301c413?source=webshare&xhsshare=pc_web&xsec_token=CBza97kEf5i08dajWd6NJZLYsNiHYcAqDFvOmHHajuZFw=&xsec_source=pc_share",
    "productForms": [
      "包装盒"
    ]
  },
  {
    "id": "XHSNEW109_P05",
    "title": "精致牛马如何好好养自己 · p5",
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW109_P05.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a8524eb000000003301c413?source=webshare&xhsshare=pc_web&xsec_token=CBza97kEf5i08dajWd6NJZLYsNiHYcAqDFvOmHHajuZFw=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  },
  {
    "id": "XHSNEW110_P06",
    "title": "精致牛马如何好好养自己 · p6",
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "shot": "静置",
    "deleted": false,
    "image": "public/by-id-new/XHSNEW110_P06.jpg",
    "sourceUrl": "https://www.xiaohongshu.com/discovery/item/6a8524eb000000003301c413?source=webshare&xhsshare=pc_web&xsec_token=CBza97kEf5i08dajWd6NJZLYsNiHYcAqDFvOmHHajuZFw=&xsec_source=pc_share",
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ]
  }
]);
})(globalThis.BayerStudio);


(function normalizeMaterialClassification(studio) {
  'use strict';

  const packagingPattern = /包装|补剂|营养|瓶|盒|药板|泡罩|袋|包|罐/;
  const containerPattern = /瓶盖|勺|杯|碗|盘|托盘|容器|餐具|瓷勺|木勺/;
  const handPattern = /手持|掌心|手掌|指尖|手握|手拿|掌上/;
  const tabletPattern = /药片|片剂|胶囊|软糖|散落|颗粒|掌心|瓶盖|勺/;
  const blisterPattern = /药板|泡罩/;

  function inferredDetailTags(item) {
    if (item.format !== '细节展示') return [];
    const text = `${item.title || ''} ${item.content || ''}`;
    const tags = [];
    if (item.shot === '手持' || handPattern.test(text)) tags.push('手持');
    if (packagingPattern.test(text)) tags.push('带产品包装');
    if (containerPattern.test(text)) tags.push('带容器');
    return tags;
  }

  function inferredProductForms(item) {
    const text = `${item.title || ''} ${item.content || ''}`;
    if (blisterPattern.test(text)) return ['包装盒', '药板'];
    if (tabletPattern.test(text)) return ['包装盒', '药片'];
    if (item.format === '手持') return ['包装盒'];
    return ['包装盒', '药板', '药片'];
  }

  studio.data.materials = studio.data.materials.map(item => ({
    ...item,
    detailTags: [...new Set(item.detailTags || inferredDetailTags(item))],
    productForms: [...new Set(item.productForms || inferredProductForms(item))]
  }));
  studio.data.classification = {
    styles: ['精致随手PO', '素人随手PO'],
    scenes: ['生活感', '摆拍感', '背景'],
    formats: ['手持', '静置', '细节展示'],
    detailTags: ['手持', '带产品包装', '带容器'],
    productForms: ['包装盒', '药板', '药片'],
    cameraAngles: ['平视', '轻微俯拍', '高位俯拍', '低机位仰拍'],
    subjectOrientations: ['正面', '左斜', '右斜', '侧面', '不限'],
    materialTypes: ['场景参考', '道具'],
    propCategories: ['梳妆台', '书桌', '餐桌', '床头柜', '客厅', '卧室']
  };
})(globalThis.BayerStudio);


(function applyHumanReviewedClassifications(studio) {
  'use strict';
  const reviewed = {
  "R-S-L": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "R-S-C": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "R-S-D": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带容器"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "R-H-L": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "R-H-C": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "R-H-D": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "A-S-L": {
    "style": "素人随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "A-S-C": {
    "style": "素人随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "A-S-D": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "A-H-L": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "药板"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "A-H-C": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "药板"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "A-H-D": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "RN01-P03": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "RN01-P04": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "RN01-P05": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "RN02-P02": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN02-P04": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN03-P01": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "RN03-P02": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN03-P03": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带容器"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "RN03-P04": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN03-P05": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "RN03-P06": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "RN03-P07": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "RN03-P08": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "RN05-P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "RN05-P02": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装"
    ],
    "productForms": [
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "RN05-P03": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN05-P04": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN05-P05": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN06-P01": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN06-P02": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN06-P03": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN07-P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN07-P02": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN07-P03": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN07-P08": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN08-P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "RN08-P02": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带容器"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "RN08-P03": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN08-P04": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN08-P05": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN08-P06": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "RN08-P07": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "RN08-P08": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "RN09-P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "RN09-P03": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "RN09-P04": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN10-P02": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "RN10-P03": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "RN10-P04": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "RN10-P05": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带容器"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN10-P06": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN11-P02": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN11-P05": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN12-P04": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN13-P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN13-P02": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN13-P04": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "RN13-P05": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "RN13-P06": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "RN13-P07": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "RN14-P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "RN14-P03": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带容器"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "AN01-P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "AN01-P02": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN02-P03": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "AN03-P01": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "AN04-P01": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN04-P02": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN04-P03": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN04-P04": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN04-P05": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN04-P06": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN05-P01": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN05-P02": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN05-P03": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN05-P04": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN05-P05": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN05-P06": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "药板"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN05-P07": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "药板"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN05-P08": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN06-P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN07-P01": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN08-P02": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN09-P03": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带容器"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN10-P01": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "AN11-P01": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "AN11-P02": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "AN11-P03": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "AN11-P04": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "AN12-P01": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "PIN01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带容器"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "PIN02": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "PIN05": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "PIN06": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "PIN07": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "PIN09": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "PIN11": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS05": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS08": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS09": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS10": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS17": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS18": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS19": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS20": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS21": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS22": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS23": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS24": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS25": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS26": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS27": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持"
    ],
    "productForms": [
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS28": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS29": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS30": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS31": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS32": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS33": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS34": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS35": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS36": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS37": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS38": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带容器"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS39": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS40": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS41": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS42": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS44": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS45": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS46": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS47": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS48": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS49": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS50": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS51": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS52": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS53": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS54": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS55": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS56": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS57": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带容器"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS58": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS59": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS60": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS61": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS62": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS63": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS64": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS65": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS66": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS67": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS68": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS69": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS70": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS71": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS72": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS73": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS74": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS75": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS76": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS79": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS80": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS81": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS83": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS84": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS85": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS86": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS87": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS88": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS89": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS90": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS91": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS92": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS93": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS94": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS95": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS96": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS97": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS98": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS99": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS100": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS101": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS102": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS103": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS104": {
    "style": "素人随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS105": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS106": {
    "style": "素人随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS107": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS108": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS109": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS110": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS111": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS112": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS113": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS114": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS115": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS116": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带容器"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS117": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS118": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS119": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS120": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS121": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带容器"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS122": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS123": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS124": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS125": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS126": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS127": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS128": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS129": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带容器"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS130": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "带容器"
    ],
    "productForms": [
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS131": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHS132": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHS133": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS139": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS149": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHS150": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "PROPBG-VANITY-01": {
    "style": "素人随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "PROPBG-VANITY-02": {
    "style": "素人随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "PROPBG-VANITY-03": {
    "style": "素人随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "PROPBG-VANITY-04": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "PROPBG-DESK-01": {
    "style": "素人随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "PROPBG-DESK-02": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "PROPBG-DINING-01": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "PROPBG-DINING-02": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "PROPBG-DINING-03": {
    "style": "素人随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "PROPBG-DINING-04": {
    "style": "素人随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "PROPBG-DINING-05": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "PROPBG-DINING-06": {
    "style": "素人随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "PROPBG-DINING-07": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "PROPBG-DINING-08": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "PROPBG-DINING-09": {
    "style": "素人随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "PROPBG-DINING-10": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "PROPBG-DINING-11": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "PROPBG-DINING-12": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "PROPBG-DINING-13": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "PROPBG-DINING-14": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "PROPBG-BEDSIDE-01": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "PROPBG-BEDSIDE-02": {
    "style": "精致随手PO",
    "scene": "背景",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW001_P01": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW002_P03": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW005_P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "低机位仰拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW007_P03": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW008_P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW009_P02": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW010_P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW012_P04": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW013_P05": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW014_P06": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW015_P07": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW016_P01": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW017_P02": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW018_P03": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW023_P02": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW024_P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW025_P02": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW026_P06": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持"
    ],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW027_P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW036_P01": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW038_P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW039_P02": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW040_P03": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW042_P05": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW043_P06": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW044_P07": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW045_P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW046_P02": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW047_P03": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW048_P04": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW049_P06": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW050_P07": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW051_P01": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW052_P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW054_P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW055_P02": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW056_P02": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW059_P07": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW060_P01": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW061_P02": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW062_P03": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW063_P04": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW064_P05": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW065_P06": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW066_P07": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW067_P08": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW068_P09": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW069_P10": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW070_P01": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW077_P01": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "细节展示",
    "detailTags": [
      "手持",
      "带产品包装",
      "带容器"
    ],
    "productForms": [
      "包装盒",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW078_P02": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW079_P03": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW081_P02": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW084_P01": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW085_P02": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW086_P03": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW094_P05": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW095_P06": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW096_P07": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW097_P01": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW098_P02": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW099_P04": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "平视",
    "subjectOrientation": "不限"
  },
  "XHSNEW100_P05": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW101_P06": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW102_P07": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW103_P01": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW104_P02": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW106_P01": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "轻微俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW107_P02": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "手持",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW109_P05": {
    "style": "精致随手PO",
    "scene": "生活感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  },
  "XHSNEW110_P06": {
    "style": "精致随手PO",
    "scene": "摆拍感",
    "format": "静置",
    "detailTags": [],
    "productForms": [
      "包装盒",
      "药板",
      "药片"
    ],
    "cameraAngle": "高位俯拍",
    "subjectOrientation": "不限"
  }
};
  studio.data.materials = studio.data.materials.map(item => {
    const saved = reviewed[item.id];
    if (!saved) throw new Error('缺少人工分类基准: ' + item.id);
    const text = (item.title || '') + ' ' + (item.content || '');
    const inferredCamera = /垂直俯|高位俯|俯视|平铺|flat lay/i.test(text) ? '高位俯拍' : /仰拍|仰视/i.test(text) ? '低机位仰拍' : /俯拍|桌面|掌心|勺|餐盘|瓶盖/i.test(text) ? '轻微俯拍' : '平视';
    const inferredOrientation = /左斜|偏左|左侧/i.test(text) ? '左斜' : /右斜|偏右|右侧/i.test(text) ? '右斜' : /侧面|侧视/i.test(text) ? '侧面' : /正面|正视/i.test(text) ? '正面' : '不限';
    return { ...item, ...saved, materialType: '场景参考', cameraAngle: saved.cameraAngle || inferredCamera, subjectOrientation: saved.subjectOrientation || inferredOrientation, shot: saved.format === '手持' || saved.detailTags.includes('手持') ? '手持' : '静置' };
  });
})(globalThis.BayerStudio);


(function registerCatalogs(studio) {
  'use strict';

  // Keep the source path readable and let each rendering/request boundary
  // encode it once. Pre-encoding this directory caused encodeURI() in the
  // generation page to turn "%E6" into "%25E6", breaking product images.
  const productRoot = 'public/products/时光片/';
  studio.data.products = {
    gallery: [
      ['01_药盒六视图.png', '药盒六视图'],
      ['02_药板六视图.png', '药板六视图'],
      ['03_单颗药片六视图.png', '单颗药片六视图'],
      ['04_包装盒_标准正面.png', '包装盒正面'],
      ['05_药板与药片_校色母版.png', '药板与药片校色母版'],
      ['06_包装盒药板药片_45度组合.png', '包装盒、药板与药片 45° 组合']
    ].map(([file, label]) => ({ image: productRoot + file, label })),
    combos: ['包装盒＋药板', '包装盒', '药板', '药片细节'],
    generationModes: [
      { value: 'single', label: '单张图' },
      { value: 'multi', label: '多张独立图' },
      { value: 'set', label: '套图（默认3张，可增减）' }
    ],
    presentations: ['静置', '手持'],
    visualStyles: ['精致随手PO', '素人随手PO'],
    tabletSupports: ['无容器（桌面静置）', '掌心承托', '指尖横向夹持', '指尖竖向夹持', '瓶盖', '勺', '杯／碗／盘', '托盘'],
    blisterStates: ['完整药板', '正在服用（有空泡罩）'],
    angleFiles: [
      ['model-angle-01.png', '正面偏左约30°', ['slightTop', 'oblique'], '平视', '左斜', '直立', '底面', '正面＋右侧面'],
      ['model-angle-02.png', '正面偏右约30°', ['slightTop', 'oblique'], '平视', '右斜', '直立', '底面', '正面＋左侧面'],
      ['model-angle-03.png', '正面偏左、俯拍', ['slightTop'], '高位俯拍', '左斜', '直立', '底面', '正面＋顶面＋右侧面'],
      ['model-angle-04.png', '俯拍、正面左侧与底部可见', ['highTop'], '高位俯拍', '右斜', '侧躺', '侧面', '正面＋左侧面＋底面'],
      ['model-angle-05.png', '横放高位俯拍、正面右侧与底部可见', ['highTop'], '高位俯拍', '左斜', '侧躺', '侧面', '正面＋右侧面＋底面'],
      ['model-angle-06.png', '直立正面、接近平视', ['eye', 'low'], '平视', '正面', '直立', '底面', '正面'],
      ['model-angle-07.png', '直立正面偏左约45°、右侧面可见', ['eye', 'low', 'oblique'], '平视', '左斜', '直立', '底面', '正面＋右侧面'],
      ['model-angle-08.png', '横放低角度、左侧面与底部条码面可见', ['low'], '轻微俯拍', '右斜', '侧躺', '侧面', '正面＋左侧面＋底面'],
      ['model-angle-09.png', '横放高位俯拍、正面左侧与底部可见', ['highTop'], '高位俯拍', '右斜', '正面朝上平放', '背面', '正面＋左侧面＋底面'],
      ['model-angle-10.png', '横放近垂直俯拍、正面为主', ['highTop'], '高位俯拍', '正面', '正面朝上平放', '背面', '正面'],
      ['model-angle-11.png', '横放高位俯拍、正面左侧与底部条码面可见', ['highTop'], '高位俯拍', '右斜', '正面朝上平放', '背面', '正面＋左侧面＋底面'],
      ['model-angle-12.png', '横放垂直俯拍、完整正面可见', ['highTop'], '高位俯拍', '正面', '正面朝上平放', '背面', '正面']
    ].map(([file, label, compatibleCameraTypes, cameraAngle, subjectOrientation, pose, supportFace, visibleFaces]) => ({ file, label, compatibleCameraTypes, cameraAngle, subjectOrientation, pose, supportFace, visibleFaces })),
    comboAngleFiles: [
      ['combo-angle-01.png', '正面偏左、轻微俯拍', ['slightTop', 'oblique'], '轻微俯拍', '左斜', '直立', '底面', '正面＋右侧面'],
      ['combo-angle-02.png', '正面偏左、高位俯拍', ['highTop', 'oblique'], '高位俯拍', '左斜', '直立', '底面', '正面＋顶面＋右侧面'],
      ['combo-angle-03.png', '正面右斜、接近平视', ['eye', 'slightTop'], '平视', '右斜', '直立', '底面', '正面＋左侧面'],
      ['combo-angle-04.png', '斜放正面偏右、高位俯拍', ['highTop', 'oblique'], '高位俯拍', '右斜', '正面朝上平放', '背面', '正面＋左侧面'],
      ['combo-angle-05.png', '正面、高位俯拍', ['highTop'], '高位俯拍', '正面', '直立', '底面', '正面＋顶面'],
      ['combo-angle-06.png', '正面、低位轻微俯拍', ['low', 'slightTop'], '轻微俯拍', '正面', '直立', '底面', '正面'],
      ['combo-angle-07.png', '正面偏左约45°、接近平视', ['eye', 'oblique'], '平视', '左斜', '直立', '底面', '正面＋右侧面'],
      ['combo-angle-08.png', '横放侧面、接近平视', ['eye', 'low'], '平视', '侧面', '侧躺', '侧面', '侧面＋底面'],
      ['combo-angle-09.png', '斜放正面偏右、高位俯拍', ['highTop', 'oblique'], '高位俯拍', '右斜', '正面朝上平放', '背面', '正面＋左侧面'],
      ['combo-angle-10.png', '包装盒与药板正面朝上平放、高位俯拍', ['highTop'], '高位俯拍', '正面', '正面朝上平放', '背面', '正面'],
      ['combo-angle-11.png', '横放底面朝前、低位俯拍', ['low'], '轻微俯拍', '右斜', '侧躺', '侧面', '正面＋底面'],
      ['combo-angle-12.png', '包装盒与药板正面朝上平放、轻微俯拍', ['slightTop'], '轻微俯拍', '正面', '正面朝上平放', '背面', '正面']
    ].map(([file, label, compatibleCameraTypes, cameraAngle, subjectOrientation, pose, supportFace, visibleFaces]) => ({ file, label, compatibleCameraTypes, cameraAngle, subjectOrientation, pose, supportFace, visibleFaces })),
    blister: { file: 'ref-药板.png', label: '完整药板' },
    usedBlister: { file: 'ref-药板-已服用.png', label: '正在服用的药板（空泡罩状态）' },
    tablet: { file: 'ref-药片.png', label: '单颗药片' },
    tabletPalm: { file: 'ref-药片-掌心.png', label: '掌心承托药片' },
    tabletHorizontal: { file: 'ref-药片-横向夹持.png', label: '药片横向夹持与厚度' },
    tabletVertical: { file: 'ref-药片-竖向夹持.png', label: '药片竖向夹持与长度' },
    proportionReference: { file: '06_包装盒药板药片_45度组合.png', label: '包装盒、药板与药片 45° 产品标准母版（颜色、身份与比例）' },
    root: productRoot
  };

  const propGroups = {
    '梳妆台': ['chanel香水','chanel彩妆','cpb','ysl彩妆','饰品1','饰品2','海蓝之谜','梳子','化妆包1','化妆包2','祖玛珑','赫莲娜','莱伯妮'],
    '书桌': ['书桌道具1','书桌道具2','书桌道具3','书桌道具4','书桌道具5','书桌道具6','书桌道具7','书桌道具8'],
    '餐桌': ['水杯','水壶','盘子'],
    '床头柜': ['香薱1','饰品1','饰品2','台灯1','台灯2','发圈1','发圈2','化妆包1','化妆包2','身体乳1','身体乳2']
  };
  studio.data.props = Object.entries(propGroups).flatMap(([category, labels]) =>
    labels.map((label, index) => ({
      id: `PROP-${category}-${String(index + 1).padStart(2, '0')}`,
      category,
      label,
      title: label,
      materialType: '道具',
      cameraAngle: '平视',
      subjectOrientation: '不限',
      image: `public/props/${category}/prop-${String(index + 1).padStart(2, '0')}.png`
    }))
  );
  const propCombinationRoot = 'public/props/组合参考/';
  const propCombinations = [
    ['01-客厅装饰摆件组合.jpg', '客厅装饰摆件组合', '客厅'],
    ['02-卧室生活道具组合.jpg', '卧室生活道具组合', '卧室'],
    ['03-梳妆台美妆护肤品组合.jpg', '梳妆台美妆护肤品组合', '梳妆台'],
    ['04-梳妆台洗护用品组合.jpg', '梳妆台洗护用品组合', '梳妆台'],
    ['05-餐桌餐具组合.jpg', '餐桌餐具组合', '餐桌'],
    ['06-餐桌杯具组合.jpg', '餐桌杯具组合', '餐桌'],
    ['07-餐桌复古餐具组合.jpg', '餐桌复古餐具组合', '餐桌'],
    ['08-梳妆台香水瓶组合.jpg', '梳妆台香水瓶组合', '梳妆台'],
    ['09-梳妆台香氛洗护品组合.jpg', '梳妆台香氛洗护品组合', '梳妆台'],
    ['10-梳妆台护肤品组合.jpg', '梳妆台护肤品组合', '梳妆台']
  ].map(([file, label, category], index) => ({
    id: `PROP-COMBO-${String(index + 1).padStart(2, '0')}`,
    category, label, title: label, materialType: '道具', cameraAngle: '平视', subjectOrientation: '不限',
    image: propCombinationRoot + file, groupedReference: true
  }));
  studio.data.props.push(...propCombinations);
})(globalThis.BayerStudio);


(function registerPlatformCatalog(studio) {
  'use strict';

  const legacy = studio.data.products;
  const shiguangAssets = [
    ...legacy.gallery.map((item, index) => ({
      id: `SG-IDENTITY-${String(index + 1).padStart(2, '0')}`,
      role: index < 6 ? 'identity-master' : 'pose-anchor',
      image: item.image,
      label: item.label,
      cameraTypes: [],
      visibleFaces: ''
    })),
    ...legacy.angleFiles.map((item, index) => ({
      id: `SG-BOX-${String(index + 1).padStart(2, '0')}`,
      role: 'static-pose-anchor',
      image: legacy.root + item.file,
      label: item.label,
      cameraTypes: item.compatibleCameraTypes,
      cameraAngle: item.cameraAngle,
      subjectOrientation: item.subjectOrientation,
      pose: item.pose,
      visibleFaces: item.visibleFaces
    })),
    ...legacy.comboAngleFiles.map((item, index) => ({
      id: `SG-COMBO-${String(index + 1).padStart(2, '0')}`,
      role: 'combination-pose-anchor',
      image: legacy.root + item.file,
      label: item.label,
      cameraTypes: item.compatibleCameraTypes,
      cameraAngle: item.cameraAngle,
      subjectOrientation: item.subjectOrientation,
      pose: item.pose,
      visibleFaces: item.visibleFaces
    })),
    ...[
      [legacy.tabletPalm, 'handheld-pose-anchor', '掌心承托'],
      [legacy.tabletHorizontal, 'handheld-pose-anchor', '指尖横向夹持'],
      [legacy.tabletVertical, 'handheld-pose-anchor', '指尖竖向夹持'],
      [legacy.blister, 'static-pose-anchor', '完整药板'],
      [legacy.usedBlister, 'static-pose-anchor', '已服用药板'],
      [legacy.tablet, 'scale-reference', '单颗药片比例']
    ].map(([item, role, label], index) => ({ id: `SG-SUPPORT-${String(index + 1).padStart(2, '0')}`, role, image: legacy.root + item.file, label, cameraTypes: [] }))
  ];
  const huggiesRoot = 'public/products/好奇/小森林纸尿裤/';
  const huggiesLittleForestAssets = [
    ['01_小森林纸尿裤_外包装_平视.png', '外包装双包装 · 平视', '外包装', '平视', '正面', 'identity-master'],
    ['02_小森林纸尿裤_外包装_平视.png', '外包装单包装 · 平视', '外包装', '平视', '正面', 'manual-pose-anchor'],
    ['03_小森林纸尿裤_外包装_高位俯拍.png', '外包装 · 高位俯拍', '外包装', '高位俯拍', '正面', 'manual-pose-anchor'],
    ['04_小森林纸尿裤_白片_平视.png', '白片组合 · 平视', '白片', '平视', '正面', 'manual-pose-anchor'],
    ['05_小森林纸尿裤_白片_高位俯拍.png', '白片组合 · 高位俯拍 A', '白片', '高位俯拍', '正面', 'manual-pose-anchor'],
    ['06_小森林纸尿裤_白片_高位俯拍.png', '白片组合 · 高位俯拍 B', '白片', '高位俯拍', '正面', 'manual-pose-anchor'],
    ['07_小森林纸尿裤_细节展示_平视.png', '吸收芯细节 · 平视', '细节展示', '平视', '正面', 'detail-anchor'],
    ['08_小森林纸尿裤_细节展示_尿包展示高位俯拍.png', '尿包细节 · 高位俯拍', '细节展示', '高位俯拍', '正面', 'detail-anchor']
  ].map(([file, label, productForm, cameraAngle, subjectOrientation, role], index) => ({
    id: `HG-LF-${String(index + 1).padStart(2, '0')}`,
    image: huggiesRoot + file, file, label, productForm, cameraAngle, subjectOrientation, role,
    cameraTypes: cameraAngle === '高位俯拍' ? ['highTop'] : ['eye'],
    visibleFaces: productForm === '外包装' ? '包装正面' : (productForm === '白片' ? '纸尿裤已展示面' : '细节已展示面')
  })).concat([
    ['09_小森林纸尿裤_S62包装_长侧面.png', 'S62包装长侧面 · 平视', '侧面包装', '平视', '侧面', 'side-pose-anchor', 'S62', '包装长侧面＋S 62片标识'],
    ['10_小森林纸尿裤_包装_端面科研标识.jpg', '包装端面 · 48年科研标识', '侧面包装', '平视', '端面', 'side-pose-anchor', '通用结构', '包装端面＋开口指示＋科研标识'],
    ['11_小森林纸尿裤_NB66包装_长侧面.png', 'NB66包装长侧面 · 平视', '侧面包装', '平视', '侧面', 'side-pose-anchor', 'NB66', '包装顶面＋长侧面＋NB 66片标识'],
    ['12_小森林纸尿裤_S62包装加白片_平视A.png', 'S62包装＋白片组合 · 平视 A', '包装＋白片', '平视', '正面', 'combination-pose-anchor', '混合展示', 'S62包装正面＋白片已展示面'],
    ['13_小森林纸尿裤_S62包装加白片_平视B.png', 'S62包装＋白片组合 · 平视 B', '包装＋白片', '平视', '正面', 'combination-pose-anchor', '混合展示', 'S62包装正面＋两张白片已展示面'],
    ['14_小森林纸尿裤_S62包装加白片_平视C.png', 'S62包装＋白片组合 · 平视 C', '包装＋白片', '平视', '正面', 'combination-pose-anchor', '混合展示', 'S62包装正面＋两张白片已展示面'],
    ['15_小森林纸尿裤_手持多片_A.jpg', '手持多片 · 扇形堆叠 A', '手持白片', '手持近景', '多片堆叠', 'handheld-pose-anchor', '尺码以图片可见标识为准', '多片正面＋侧面厚度＋手部承托'],
    ['16_小森林纸尿裤_手持两片_B.jpg', '手持两片 · 重叠 B', '手持白片', '手持近景', '两片重叠', 'handheld-pose-anchor', 'S码可见', '两片正面＋S码标识＋手部承托'],
    ['17_小森林纸尿裤_手持多片_C.jpg', '手持多片 · 正面 C', '手持白片', '手持近景', '多片堆叠', 'handheld-pose-anchor', '尺码以图片可见标识为准', '多片正面＋手部承托'],
    ['18_小森林纸尿裤_手持多片_D.jpg', '手持多片 · 双手承托 D', '手持白片', '手持近景', '多片堆叠', 'handheld-pose-anchor', 'S码可见', '多片正面＋S码标识＋双手承托'],
    ['19_小森林纸尿裤_手持多片_E.jpg', '手持多片 · 展开 E', '手持白片', '手持近景', '多片展开', 'handheld-pose-anchor', '尺码以图片可见标识为准', '多片展开面＋手部承托'],
    ['20_小森林纸尿裤_手持单片_F.jpg', '手持单片 · 竖向侧面 F', '手持白片', '手持近景', '竖向侧面', 'handheld-pose-anchor', '尺码未展示', '单片侧面＋手部夹持'],
    ['21_小森林纸尿裤_手持单片_G.jpg', '手持单片 · 掌心承托 G', '手持白片', '手持近景', '竖向正面', 'handheld-pose-anchor', '尺码未展示', '单片正面＋掌心承托'],
    ['22_小森林纸尿裤_手持多片_H.jpg', '手持多片 · 竖向堆叠 H', '手持白片', '手持近景', '多片堆叠', 'handheld-pose-anchor', 'NB码可见', '多片正面＋NB标识＋手部承托']
  ].map(([file, label, productForm, cameraAngle, subjectOrientation, role, skuScope, visibleFaces], index) => ({
    id: `HG-LF-${String(index + 9).padStart(2, '0')}`,
    image: huggiesRoot + file, file, label: `${label} · ${skuScope}`, productForm, cameraAngle, subjectOrientation, role, skuScope, visibleFaces,
    cameraTypes: cameraAngle === '手持近景' ? ['handheld'] : ['eye']
  })));

  const additionalHuggiesDefinitions = [
    ['huggies-little-forest-pants', '小森林拉拉裤', 'HG-LFP', [
      '10_小森林拉拉裤_外包装_平视.png', '11_小森林拉拉裤_外包装_平视.png',
      '12_小森林拉拉裤_外包装+白片_高位俯拍.png', '13_小森林拉拉裤_外包装+白片_高位俯拍.png',
      '14_小森林拉拉裤_白片_平视.png', '15_小森林拉拉裤_细节展示_平视.png'
    ]],
    ['huggies-little-peach-diapers', '小桃裤纸尿裤', 'HG-LTD', [
      '16_小桃裤纸尿裤_外包装_平视.png', '17_小桃裤纸尿裤_外包装_平视.png',
      '18_小桃裤纸尿裤_白片_平视.png', '19_小桃裤纸尿裤_白片_平视.png',
      '20_小桃裤纸尿裤_细节展示_低位俯拍.png'
    ]],
    ['huggies-little-peach-pants', '小桃裤拉拉裤', 'HG-LTP', [
      '21_小桃裤拉拉裤_外包装_平视.png', '22_小桃裤拉拉裤_外包装+白片_高位俯拍.png'
    ]],
    ['huggies-x-diapers', 'X系列纸尿裤', 'HG-XD', [
      '23_X系列纸尿裤_外包装_平视.png', '24_X系列纸尿裤_外包装_平视.png',
      '25_X系列纸尿裤_外包装_高位俯拍.png', '26_X系列纸尿裤_外包装+白片_高位俯拍.png',
      '27_X系列纸尿裤_外包装+白片_高位俯拍.png', '28_X系列纸尿裤_白片_平视.png',
      '29_X系列纸尿裤_白片_低位俯拍.png', '30_X系列纸尿裤_细节展示_平视.png',
      '31_X系列纸尿裤_细节展示_平视.png'
    ]],
    ['huggies-x-pants', 'X系列拉拉裤', 'HG-XP', [
      '32_X系列拉拉裤_外包装_平视.png', '33_X系列拉拉裤_外包装_高位俯拍.png',
      '34_X系列拉拉裤_外包装_高位俯拍.png', '35_X系列拉拉裤_白片_平视.png'
    ]],
    ['huggies-deep-sleep-diapers', '深睡大师纸尿裤', 'HG-DSD', [
      '36_深睡大师纸尿裤_外包装_平视.png', '37_深睡大师纸尿裤_外包装_高位俯拍.png',
      '38_深睡大师纸尿裤_外包装_高位俯拍.png', '39_深睡大师纸尿裤_外包装+白片_高位俯拍.png',
      '40_深睡大师纸尿裤_白片_平视.png', '41_深睡大师纸尿裤_白片_平视.png',
      '42_深睡大师纸尿裤_细节展示_平视.png', '43_深睡大师纸尿裤_细节展示_平视.png',
      '44_深睡大师纸尿裤_细节展示_平视.png', '45_深睡大师纸尿裤_细节展示_低位俯拍.png',
      '46_深睡大师纸尿裤_细节展示_低位俯拍.png'
    ]],
    ['huggies-deep-sleep-pants', '深睡大师拉拉裤', 'HG-DSP', [
      '47_深睡大师拉拉裤_外包装_平视.png', '48_深睡大师拉拉裤_外包装_平视.png',
      '49_深睡大师拉拉裤_外包装+白片_高位俯拍.png'
    ]],
    ['huggies-butt-mask-diapers', '屁屁面膜纸尿裤', 'HG-BMD', [
      '50_屁屁面膜纸尿裤_外包装_平视.jpg', '51_屁屁面膜纸尿裤_外包装_平视.jpg',
      '52_屁屁面膜纸尿裤_外包装_高位俯拍.jpg', '53_屁屁面膜纸尿裤_外包装_高位俯拍.jpg',
      '54_屁屁面膜纸尿裤_外包装_低位俯拍.jpg'
    ]],
    ['huggies-butt-mask-pants', '屁屁面膜拉拉裤', 'HG-BMP', [
      '55_屁屁面膜拉拉裤_外包装_平视.jpg', '56_屁屁面膜拉拉裤_外包装_平视.jpg',
      '57_屁屁面膜拉拉裤_外包装_高位俯拍.jpg', '58_屁屁面膜拉拉裤_外包装_高位俯拍.jpg',
      '59_屁屁面膜拉拉裤_外包装_低位俯拍.jpg'
    ]]
  ];

  function additionalHuggiesAssets(name, prefix, files) {
    return files.map((file, index) => {
      const productForm = file.includes('外包装+白片') ? '包装＋白片'
        : (file.includes('细节展示') ? '细节展示' : (file.includes('白片') ? '白片' : '外包装'));
      const cameraAngle = file.includes('高位俯拍') ? '高位俯拍' : (file.includes('低位俯拍') ? '低位俯拍' : '平视');
      const role = productForm === '包装＋白片' ? 'combination-pose-anchor'
        : (productForm === '细节展示' ? 'detail-anchor'
          : (productForm === '外包装' && index === 0 ? 'identity-master' : 'manual-pose-anchor'));
      const label = file.replace(/\.(?:png|jpe?g|webp)$/i, '').replace(new RegExp(`^\\d+_${name}_`), '').replaceAll('_', ' · ').replace('外包装+白片', '外包装＋白片');
      return {
        id: `${prefix}-${String(index + 1).padStart(2, '0')}`,
        image: `public/products/好奇/${name}/${file}`,
        file, label, productForm, cameraAngle, role,
        subjectOrientation: '以图片已展示面为准',
        cameraTypes: cameraAngle === '高位俯拍' ? ['highTop'] : (cameraAngle === '低位俯拍' ? ['low'] : ['eye']),
        visibleFaces: productForm === '外包装' ? '包装已展示面' : (productForm === '包装＋白片' ? '包装与白片已展示面' : `${productForm}已展示面`)
      };
    });
  }

  const additionalHuggiesProducts = additionalHuggiesDefinitions.map(([id, name]) => ({
    id, brandId: 'huggies', name, category: '母婴护理', status: 'active'
  }));
  const additionalHuggiesSkus = additionalHuggiesDefinitions.map(([productId, name, prefix, files]) => {
    const assets = additionalHuggiesAssets(name, prefix, files);
    const productForms = [...new Set(assets.map(asset => asset.productForm))];
    const cameraAngles = [...new Set(assets.map(asset => asset.cameraAngle))];
    return {
      id: `${productId}-default`, brandId: 'huggies', productId, name: `${name}标准档案`, status: 'ready',
      onboardingTier: assets.length >= 5 ? 'standard' : 'quick',
      poseCoverage: {
        identity: assets.some(asset => asset.role === 'identity-master'),
        static: true,
        handheld: false,
        scale: assets.some(asset => asset.productForm === '包装＋白片'),
        combination: assets.some(asset => asset.productForm === '包装＋白片')
      },
      assetFilters: { productForms, cameraAngles },
      assets
    };
  });

  studio.data.platformCatalog = {
    schema: 'visual-studio-product-catalog-v1',
    brands: [
      { id: 'bayer', name: '拜耳', status: 'active' },
      { id: 'huggies', name: '好奇', status: 'active' }
    ],
    products: [
      { id: 'shiguang', brandId: 'bayer', name: '时光片', category: '营养健康', status: 'active' },
      { id: 'huggies-little-forest-diapers', brandId: 'huggies', name: '小森林纸尿裤', category: '母婴护理', status: 'active' },
      ...additionalHuggiesProducts
    ],
    skus: [
      {
        id: 'bayer-shiguang-default', brandId: 'bayer', productId: 'shiguang', name: '时光片标准装', status: 'ready',
        onboardingTier: 'full', poseCoverage: { identity: true, static: true, handheld: true, scale: true, combination: true },
        assets: shiguangAssets,
        legacyProduct: legacy
      },
      {
        id: 'huggies-little-forest-s62', brandId: 'huggies', productId: 'huggies-little-forest-diapers', name: '小森林纸尿裤 S码 62片（试点）', status: 'ready',
        onboardingTier: 'quick', manualSelectionRequired: false,
        recommendedPilotAssetId: 'HG-LF-21',
        pilotOutputProfile: { productCount: 1, excludeHands: true, excludePackaging: true },
        poseCoverage: { identity: true, static: true, handheld: true, scale: true, combination: true },
        scaleBasis: '包装与白片同框实拍图提供本次组合内相对比例；独立尺寸母版为可选补充，不阻断手动生图',
        assetFilters: {
          productForms: ['外包装', '白片', '细节展示', '侧面包装', '包装＋白片', '手持白片'],
          cameraAngles: ['平视', '高位俯拍', '手持近景']
        },
        assets: huggiesLittleForestAssets
      },
      ...additionalHuggiesSkus
    ],
    onboardingTiers: [
      { id: 'quick', label: '快速档案', requirement: '身份母版＋至少1个真实摆放角度', purpose: '先验证有限场景，不承诺未展示包装面' },
      { id: 'standard', label: '标准档案', requirement: '身份母版＋静置＋手持＋比例参考', purpose: '覆盖常用小红书精致与素人场景' },
      { id: 'full', label: '完整档案', requirement: '多面身份母版＋多机位静置/手持＋组合参考', purpose: '支持自动选材与更复杂套图' }
    ]
  };

  studio.data.catalogHelpers = {
    brand(id) { return studio.data.platformCatalog.brands.find(item => item.id === id); },
    product(id) { return studio.data.platformCatalog.products.find(item => item.id === id); },
    sku(id) { return studio.data.platformCatalog.skus.find(item => item.id === id); },
    skusForProduct(productId) { return studio.data.platformCatalog.skus.filter(item => item.productId === productId); }
  };
})(globalThis.BayerStudio);


(function registerStorage(studio) {
  'use strict';

  function read(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch (error) {
      return fallback;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }

  studio.services.storage = { read, write };
})(globalThis.BayerStudio);


(function registerRequestService(studio) {
  'use strict';

  const timeouts = Object.freeze({
    health: 8000,
    analysis: 25000,
    prompt: 25000,
    generation: 180000
  });

  function requestError(message, code, requestId, cause) {
    const error = new Error(message);
    error.code = code;
    error.requestId = requestId || '';
    if (cause) error.cause = cause;
    return error;
  }

  async function requestJson(url, options = {}) {
    const controller = new AbortController();
    const externalSignal = options.signal;
    let timedOut = false;
    const timeoutMs = Math.max(1, Number(options.timeoutMs) || timeouts.health);
    const timer = setTimeout(() => {
      timedOut = true;
      controller.abort('timeout');
    }, timeoutMs);
    const cancel = () => controller.abort('cancelled');
    if (externalSignal?.aborted) cancel();
    else externalSignal?.addEventListener('abort', cancel, { once: true });

    try {
      const headers = { ...(options.headers || {}) };
      let body = options.body;
      if (body !== undefined && body !== null && !(body instanceof Blob) && typeof body !== 'string') {
        body = JSON.stringify(body);
        if (!headers['Content-Type']) headers['Content-Type'] = 'application/json; charset=utf-8';
      }
      const response = await fetch(url, {
        method: options.method || (body == null ? 'GET' : 'POST'),
        headers,
        body,
        cache: options.cache,
        signal: controller.signal
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw requestError(payload.error || `服务请求失败（${response.status}）`, payload.code || `http_${response.status}`, payload.requestId || options.requestId, null);
      }
      return payload;
    } catch (error) {
      if (timedOut) throw requestError('等待超时，已停止等待。', 'timeout', options.requestId, error);
      if (externalSignal?.aborted || controller.signal.reason === 'cancelled') throw requestError('已取消本次请求。', 'cancelled', options.requestId, error);
      if (error?.code && error.code !== 'ABORT_ERR') throw error;
      throw requestError(`网络中断，没有收到服务端确认（${error.message || 'Load failed'}）`, 'transport_error', options.requestId, error);
    } finally {
      clearTimeout(timer);
      externalSignal?.removeEventListener('abort', cancel);
    }
  }

  function generationFailureMessage(error) {
    const base = error?.message || '图片生成失败';
    if (/no credits remaining|insufficient[_ ]quota|billing|credit balance/i.test(base) || error?.code === 'insufficient_quota') {
      return 'OpenAI API 生图额度已用尽，请充值后再手动重试。本次没有生成新图，旧图已完整保留。';
    }
    if (['timeout', 'transport_error', 'upstream_timeout', 'cancelled'].includes(error?.code)) {
      return `${base} 没有自动重试。本次结果未确认，请先打开“历史评审”查看是否已有图片，再决定是否重新生成。`;
    }
    return base;
  }

  studio.services.request = { requestJson, requestError, generationFailureMessage, timeouts };
})(globalThis.BayerStudio);


(function registerSceneAnalysisService(studio) {
  'use strict';

  // v2 separates environmental structure from the original product, so legacy
  // fingerprints can no longer leak pills, bottles or holders into prompts.
  const storageKey = 'bayer-scene-fingerprints-v2';
  const requiredApiVersion = '2026-09-12.1';

  function isLocalPreview() {
    return ['127.0.0.1', 'localhost'].includes(location.hostname);
  }

  function apiBaseUrl() {
    const configured = document.querySelector('meta[name="bayer-api-base"]')?.content?.trim() || '';
    // The browser reaches the fixed staging Worker directly during local
    // acceptance. The Mac-side Node proxy is retained only for local reviews;
    // it is not reliable on networks that time out workers.dev connections.
    if (isLocalPreview() && configured) return configured.replace(/\/$/, '');
    return configured.replace(/\/$/, '');
  }

  function reviewApiBaseUrl() {
    if (isLocalPreview()) return location.origin;
    return apiBaseUrl();
  }

  function publicBaseUrl() {
    return document.querySelector('meta[name="bayer-public-base"]')?.content?.trim().replace(/\/$/, '') || '';
  }

  function imageRequestUrl(imagePath) {
    const path = String(imagePath || '');
    if (/^https?:\/\//i.test(path)) return path;
    if (location.protocol !== 'file:') return encodeURI(path);
    const publicBase = publicBaseUrl();
    if (!publicBase) throw new Error('本地预览尚未配置公开素材地址');
    return encodeURI(`${publicBase}/${path.replace(/^\.\//, '').replace(/^\//, '')}`);
  }

  function all() {
    return studio.services.storage.read(storageKey, {});
  }

  function get(sceneId) {
    return all()[sceneId] || null;
  }

  function save(sceneId, fingerprint) {
    const fingerprints = all();
    fingerprints[sceneId] = fingerprint;
    studio.services.storage.write(storageKey, fingerprints);
    return fingerprint;
  }

  function blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error('无法读取场景图片'));
      reader.readAsDataURL(blob);
    });
  }

  async function imageDataUrl(imagePath) {
    const response = await fetch(imageRequestUrl(imagePath));
    if (!response.ok) throw new Error(`读取场景图片失败（${response.status}）`);
    return blobToDataUrl(await response.blob());
  }

  async function analyze(item, options = {}) {
    if (!options.force) {
      const cached = get(item.id);
      if (cached) return cached;
    }
    const baseUrl = apiBaseUrl();
    if (!baseUrl) throw new Error('尚未配置 Gemini 服务端地址');
    try {
      const accessHeaders = await studio.services.accessSession.authorizationHeader(baseUrl);
      const payload = await studio.services.request.requestJson(`${baseUrl}/api/analyze-scene`, {
        method: 'POST',
        headers: accessHeaders,
        body: {
          sceneId: item.id,
          imageDataUrl: await imageDataUrl(item.image),
          knownTags: {
            style: item.style,
            scene: item.scene,
            format: item.format,
            cameraAngle: item.cameraAngle,
            subjectOrientation: item.subjectOrientation
          }
        },
        timeoutMs: studio.services.request.timeouts.analysis,
        signal: options.signal
      });
      if (!payload.fingerprint) throw new Error('Gemini 未返回场景指纹');
      return save(item.id, payload.fingerprint);
    } catch (error) {
      const hint = location.protocol === 'file:' ? '（本地页面请求被浏览器拦截，请部署支持本地来源的新版 Worker）' : '';
      const failure = new Error(`${error.code === 'timeout' || error.code === 'upstream_timeout' ? 'Gemini 场景分析超时' : `无法连接 Gemini 服务${hint}`}：${error.message}`);
      failure.code = error.code || 'analysis_error';
      throw failure;
    }
  }

  async function validateCleanPlate({ imageDataUrl: generatedImageDataUrl, sourceItem, selectedProps = [], signal } = {}) {
    const baseUrl = apiBaseUrl();
    if (!baseUrl) throw new Error('尚未配置 Gemini 服务端地址');
    const accessHeaders = await studio.services.accessSession.authorizationHeader(baseUrl);
    const payload = await studio.services.request.requestJson(`${baseUrl}/api/validate-clean-plate`, {
      method: 'POST',
      headers: accessHeaders,
      body: {
        imageDataUrl: generatedImageDataUrl,
        sceneImageDataUrl: await imageDataUrl(sourceItem.image),
        expectedPropGroups: Math.min(2, selectedProps.length),
        propLabels: selectedProps.map(prop => prop.label)
      },
      timeoutMs: studio.services.request.timeouts.analysis,
      signal
    });
    if (!payload.validation || typeof payload.validation.pass !== 'boolean') throw new Error('Gemini 未返回有效母版质检结果');
    return payload.validation;
  }

  function stripOriginalProduct(text) {
    const productPattern = /药片|胶囊|药板|泡罩|保健品|补剂|营养品|产品瓶|药瓶|包装瓶|包装盒|原产品|托药|盛药|装药/;
    return String(text || '')
      .split(/(?<=[。；;\n])/)
      .filter(sentence => !productPattern.test(sentence))
      .join('')
      .trim();
  }

  function promptGuide(fingerprint) {
    if (!fingerprint) return '';
    if (typeof fingerprint.environmentGuide === 'string' && fingerprint.environmentGuide.trim()) return fingerprint.environmentGuide.trim();
    if (fingerprint.environment && typeof fingerprint.environment.promptGuide === 'string') return fingerprint.environment.promptGuide.trim();
    if (typeof fingerprint.promptGuide === 'string' && fingerprint.promptGuide.trim()) return stripOriginalProduct(fingerprint.promptGuide);
    const keep = Array.isArray(fingerprint.preserve) ? fingerprint.preserve.join('；') : '';
    const change = Array.isArray(fingerprint.change) ? fingerprint.change.join('；') : '';
    return [stripOriginalProduct(fingerprint.summary), keep && `重点保留：${stripOriginalProduct(keep)}`, change && `允许变化：${stripOriginalProduct(change)}`].filter(Boolean).join('。');
  }

  function productPose(fingerprint) {
    return fingerprint?.sourceProduct || fingerprint?.product || null;
  }

  async function health() {
    const baseUrl = apiBaseUrl();
    if (!baseUrl) return { ok: false, geminiConfigured: false, error: '尚未配置服务端地址' };
    try {
      const payload = await studio.services.request.requestJson(`${baseUrl}/api/health`, {
        cache: 'no-store',
        timeoutMs: studio.services.request.timeouts.health
      });
      if (payload.apiVersion !== requiredApiVersion) {
        return { ...payload, workerVersionCompatible: false, versionWarning: `测试 Worker 仍是${payload.apiVersion || '旧版'}；多轮套图 Beta 尚未生效，版本更新前禁止提交真实套图。` };
      }
      return { ...payload, workerVersionCompatible: true };
    } catch (error) {
      return { ok: false, error: error.code === 'timeout' ? '服务检测超时，检测通过前不会提交付费生图。' : `无法连接服务端：${error.message}` };
    }
  }

  studio.services.sceneAnalysis = { apiBaseUrl, reviewApiBaseUrl, publicBaseUrl, imageRequestUrl, get, save, analyze, validateCleanPlate, health, promptGuide, productPose, stripOriginalProduct, requiredApiVersion };
})(globalThis.BayerStudio);


(function registerAccessSessionService(studio) {
  'use strict';

  const storageKey = 'bayer-private-session-v1';
  let pending = null;

  function isLocalMock(apiBaseUrl) {
    return ['127.0.0.1', 'localhost'].includes(location.hostname) && apiBaseUrl === location.origin;
  }

  function tokenExpired(token) {
    try {
      const encoded = token.split('.')[0].replace(/-/g, '+').replace(/_/g, '/');
      const payload = JSON.parse(decodeURIComponent(Array.from(atob(encoded + '='.repeat((4 - encoded.length % 4) % 4)), character => `%${character.charCodeAt(0).toString(16).padStart(2, '0')}`).join('')));
      return !Number(payload.expiresAt) || Number(payload.expiresAt) <= Math.floor(Date.now() / 1000) + 30;
    } catch (error) {
      return true;
    }
  }

  function storedToken() {
    try {
      const token = localStorage.getItem(storageKey) || '';
      if (token && tokenExpired(token)) {
        localStorage.removeItem(storageKey);
        return '';
      }
      return token;
    } catch (error) {
      return '';
    }
  }

  function storeToken(token) {
    try {
      localStorage.setItem(storageKey, token);
    } catch (error) {
      // 隐私模式下仍可在当前请求使用新 token。
    }
  }

  function clear() {
    try { localStorage.removeItem(storageKey); } catch (error) { /* noop */ }
  }

  async function login(apiBaseUrl, suppliedPassphrase = '') {
    const passphrase = suppliedPassphrase || globalThis.prompt('请输入平台访问口令（本页不会保存口令）');
    if (!passphrase) throw new Error('已取消访问验证');
    const response = await fetch(`${apiBaseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ passphrase })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload.token) throw new Error(payload.error || `访问验证失败（${response.status}）`);
    storeToken(payload.token);
    return payload.token;
  }

  async function token(apiBaseUrl) {
    const existing = storedToken();
    if (existing) return existing;
    if (!pending) pending = login(apiBaseUrl).finally(() => { pending = null; });
    return pending;
  }

  async function authorizationHeader(apiBaseUrl) {
    if (isLocalMock(apiBaseUrl)) return {};
    return { Authorization: `Bearer ${await token(apiBaseUrl)}` };
  }

  async function validate(apiBaseUrl) {
    if (!requiresLogin()) return true;
    const existing = storedToken();
    if (!existing) return false;
    const response = await fetch(`${apiBaseUrl}/api/auth/session`, {
      cache: 'no-store',
      headers: { Authorization: `Bearer ${existing}` }
    });
    if (response.status === 401) {
      clear();
      return false;
    }
    if (!response.ok) throw new Error('暂时无法验证登录状态');
    return true;
  }

  function requiresLogin() {
    return !['127.0.0.1', 'localhost'].includes(location.hostname);
  }

  studio.services.accessSession = { authorizationHeader, clear, storedToken, login, validate, requiresLogin };
})(globalThis.BayerStudio);


(function registerImageGenerationService(studio) {
  'use strict';

  const userKey = 'bayer-anonymous-user-v1';

  function anonymousUserId() {
    let id = studio.services.storage.read(userKey, '');
    if (!id) {
      id = globalThis.crypto?.randomUUID?.() || `user-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      studio.services.storage.write(userKey, id);
    }
    return id;
  }

  function absoluteAssetUrl(path) {
    const value = String(path || '');
    if (/^data:image\/(?:jpeg|png|webp);base64,/i.test(value)) return value;
    if (/^https?:\/\//i.test(value)) return value;
    const publicBase = studio.services.sceneAnalysis.publicBaseUrl();
    if (!publicBase) throw new Error('尚未配置公开素材地址');
    return encodeURI(`${publicBase}/${value.replace(/^\.\//, '').replace(/^\//, '')}`);
  }

  function referencesFor(result, options = {}, urlResolver = absoluteAssetUrl) {
    if (options.cleanPlate) {
      return [
        { role: 'scene', label: `无产品环境底图参考 ${result.sourceItem?.id || result.item.id}`, url: urlResolver(result.sourceItem?.image || result.item.image) },
        ...result.selectedProps.map(prop => ({ role: 'prop', label: `道具候选池 ${prop.label}`, url: urlResolver(prop.image) }))
      ].slice(0, 8);
    }
    const poseReference = { role: 'product', label: result.custom ? `唯一产品外观与姿态依据 ${result.productReference.label}` : `产品姿态参考（只锁角度，忽略颜色） ${result.productReference.label}`, url: urlResolver(result.productReference.image) };
    const colorMaster = result.productReference.proportionReference
      ? { role: 'proportion', label: `${result.productReference.proportionReference.label}（颜色与身份唯一标准）`, url: urlResolver(result.productReference.proportionReference.image) }
      : null;
    const supportReferences = (result.productReference.additionalReferences || []).map(reference => ({ role: reference.kind || 'support', label: reference.label, url: urlResolver(reference.image) }));
    const productReferences = [poseReference, colorMaster, ...supportReferences].filter(Boolean);
    if (options.hasSetAnchor) return [colorMaster, poseReference, ...supportReferences].filter(Boolean).slice(0, 4);
    return [
      { role: 'scene', label: `场景参考 ${result.item.id}`, url: urlResolver(result.item.image) },
      ...productReferences,
      ...result.selectedProps.map(prop => ({ role: 'prop', label: `道具候选池 ${prop.label}`, url: urlResolver(prop.image) }))
    ].slice(0, 8);
  }

  function isLocalPreview() {
    return ['127.0.0.1', 'localhost'].includes(location.hostname);
  }

  function blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = () => reject(new Error('无法转换本地参考图片'));
      reader.readAsDataURL(blob);
    });
  }

  async function requestAssetUrl(path) {
    const value = String(path || '');
    if (/^data:image\/(?:jpeg|png|webp);base64,/i.test(value)) return value;
    if (/^https?:\/\//i.test(value) || !isLocalPreview()) return absoluteAssetUrl(value);
    const localPath = encodeURI(`/${value.replace(/^\.\//, '').replace(/^\//, '')}`);
    const response = await fetch(localPath, { credentials: 'same-origin' });
    if (!response.ok) throw new Error(`无法读取本地参考图片（HTTP ${response.status}）：${value}`);
    const contentType = String(response.headers.get('Content-Type') || '').toLowerCase();
    if (!contentType.startsWith('image/')) throw new Error(`本地参考文件不是图片：${value}`);
    const blob = await response.blob();
    if (blob.size > 9 * 1024 * 1024) throw new Error(`本地参考图片超过 9MB：${value}`);
    return blobToDataUrl(blob);
  }

  async function requestReferencesFor(result, options = {}) {
    const references = referencesFor(result, options, value => String(value || ''));
    if (options.previousImageDataUrl) references.push({ role: 'previous', label: '上一轮生成结果（只作为待修改画面，产品身份仍以产品原图为准）', url: options.previousImageDataUrl });
    return Promise.all(references.map(async reference => ({
      ...reference,
      url: await requestAssetUrl(reference.url)
    })));
  }

  function loadDataImage(dataUrl, label = '图片') {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error(`无法读取${label}`));
      image.src = dataUrl;
    });
  }

  function setEditProfile(result) {
    const fingerprint = result.sceneFingerprint || {};
    const zone = `${fingerprint.layout?.subjectZone || ''} ${fingerprint.sourceProduct?.zone || ''}`;
    const handHeld = result.config?.presentation === '手持' || result.item?.format === '手持';
    const centerX = /左/.test(zone) ? 0.43 : (/右/.test(zone) ? 0.57 : 0.52);
    const fromRight = handHeld && /右/.test(zone);
    let points = handHeld
      ? [
          [0.02, 0.98], [0.02, 0.62], [centerX - 0.34, 0.43], [centerX - 0.24, 0.27],
          [centerX + 0.20, 0.24], [centerX + 0.31, 0.43], [0.94, 0.67], [0.94, 0.96]
        ]
      : [
          [centerX - 0.38, 0.94], [centerX - 0.36, 0.62], [centerX - 0.27, 0.33],
          [centerX + 0.20, 0.29], [centerX + 0.31, 0.47], [centerX + 0.39, 0.70], [centerX + 0.37, 0.94]
        ];
    if (fromRight) points = points.map(([x, y]) => [1 - x, y]).reverse();
    points = points.map(([x, y]) => [studio.utils.clamp(x, 0.01, 0.99), studio.utils.clamp(y, 0.18, 0.99)]);
    return { kind: handHeld ? 'hand' : 'static', points };
  }

  function smoothProfilePath(context, profile, width, height) {
    const points = profile.points.map(([x, y]) => [x * width, y * height]);
    const midpoint = (left, right) => [(left[0] + right[0]) / 2, (left[1] + right[1]) / 2];
    const firstMidpoint = midpoint(points[points.length - 1], points[0]);
    context.beginPath();
    context.moveTo(firstMidpoint[0], firstMidpoint[1]);
    points.forEach((point, index) => {
      const next = points[(index + 1) % points.length];
      const nextMidpoint = midpoint(point, next);
      context.quadraticCurveTo(point[0], point[1], nextMidpoint[0], nextMidpoint[1]);
    });
    context.closePath();
  }

  async function createSetLock(anchorDataUrl, result) {
    const anchor = await loadDataImage(anchorDataUrl, '套图封面环境母版');
    const width = anchor.naturalWidth;
    const height = anchor.naturalHeight;
    const profile = setEditProfile(result);
    const feather = Math.max(24, Math.round(Math.min(width, height) * 0.035));
    const anchorCanvas = document.createElement('canvas');
    anchorCanvas.width = width;
    anchorCanvas.height = height;
    anchorCanvas.getContext('2d').drawImage(anchor, 0, 0, width, height);
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = width;
    maskCanvas.height = height;
    const maskContext = maskCanvas.getContext('2d');
    maskContext.fillStyle = '#000000';
    maskContext.fillRect(0, 0, width, height);
    maskContext.save();
    maskContext.globalCompositeOperation = 'destination-out';
    maskContext.fillStyle = '#000000';
    maskContext.strokeStyle = '#000000';
    maskContext.lineJoin = 'round';
    maskContext.lineCap = 'round';
    maskContext.lineWidth = feather * 4;
    smoothProfilePath(maskContext, profile, width, height);
    maskContext.fill();
    maskContext.stroke();
    maskContext.restore();
    const shapeCanvas = document.createElement('canvas');
    shapeCanvas.width = width;
    shapeCanvas.height = height;
    const shapeContext = shapeCanvas.getContext('2d');
    shapeContext.fillStyle = '#ffffff';
    smoothProfilePath(shapeContext, profile, width, height);
    shapeContext.fill();
    const blendMaskCanvas = document.createElement('canvas');
    blendMaskCanvas.width = width;
    blendMaskCanvas.height = height;
    const blendContext = blendMaskCanvas.getContext('2d');
    blendContext.filter = `blur(${feather}px)`;
    blendContext.drawImage(shapeCanvas, 0, 0);
    return {
      anchorDataUrl: anchorCanvas.toDataURL('image/png'),
      maskDataUrl: maskCanvas.toDataURL('image/png'),
      blendMaskDataUrl: blendMaskCanvas.toDataURL('image/png'),
      profile,
      feather
    };
  }

  function blendProtectedPixels(anchorPixels, generatedPixels, maskPixels) {
    const output = new Uint8ClampedArray(anchorPixels.length);
    for (let index = 0; index < anchorPixels.length; index += 4) {
      const alpha = maskPixels[index + 3];
      if (alpha <= 8) {
        output.set(anchorPixels.subarray(index, index + 4), index);
      } else if (alpha >= 247) {
        output.set(generatedPixels.subarray(index, index + 4), index);
      } else {
        const weight = alpha / 255;
        output[index] = Math.round(anchorPixels[index] * (1 - weight) + generatedPixels[index] * weight);
        output[index + 1] = Math.round(anchorPixels[index + 1] * (1 - weight) + generatedPixels[index + 1] * weight);
        output[index + 2] = Math.round(anchorPixels[index + 2] * (1 - weight) + generatedPixels[index + 2] * weight);
        output[index + 3] = 255;
      }
    }
    return output;
  }

  async function protectSetBackground(anchorDataUrl, generatedDataUrl, blendMaskDataUrl) {
    const [anchor, generated, blendMask] = await Promise.all([
      loadDataImage(anchorDataUrl, '套图封面环境母版'),
      loadDataImage(generatedDataUrl, '套图内页生成结果'),
      loadDataImage(blendMaskDataUrl, '套图像素保护遮罩')
    ]);
    const width = anchor.naturalWidth;
    const height = anchor.naturalHeight;
    const imageCanvas = document.createElement('canvas');
    imageCanvas.width = width;
    imageCanvas.height = height;
    const imageContext = imageCanvas.getContext('2d', { willReadFrequently: true });
    imageContext.drawImage(anchor, 0, 0, width, height);
    const anchorData = imageContext.getImageData(0, 0, width, height);
    imageContext.clearRect(0, 0, width, height);
    imageContext.drawImage(generated, 0, 0, width, height);
    const generatedData = imageContext.getImageData(0, 0, width, height);
    imageContext.clearRect(0, 0, width, height);
    imageContext.drawImage(blendMask, 0, 0, width, height);
    const maskData = imageContext.getImageData(0, 0, width, height);
    const output = new ImageData(blendProtectedPixels(anchorData.data, generatedData.data, maskData.data), width, height);
    imageContext.putImageData(output, 0, 0);
    return dataUrlImage(imageCanvas.toDataURL('image/png'));
  }

  function dataUrlImage(dataUrl) {
    const match = String(dataUrl || '').match(/^data:(image\/(?:jpeg|png|webp));base64,(.+)$/);
    if (!match) throw new Error('套图背景锁定结果不是有效图片');
    return { mimeType: match[1], b64Json: match[2] };
  }

  async function generate(result, options = {}) {
    const baseUrl = studio.services.sceneAnalysis.apiBaseUrl();
    if (!baseUrl) throw new Error('尚未配置生图服务端地址');
    const count = studio.utils.clamp(options.count || 1, 1, 5);
    const hasSetAnchor = Boolean(options.setAnchorDataUrl);
    const cleanPlate = Boolean(options.cleanPlate);
    const references = await requestReferencesFor(result, { hasSetAnchor, cleanPlate, previousImageDataUrl: options.previousImageDataUrl || '' });
    const requestId = globalThis.crypto?.randomUUID?.() || `generation-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const accessHeaders = await studio.services.accessSession.authorizationHeader(baseUrl);
    const requestBody = JSON.stringify({
      requestId,
      userId: anonymousUserId(),
      prompt: result.text,
      count,
      ratio: options.ratio || studio.state.prompt.ratio || '3:4',
      quality: options.quality === 'high' ? 'high' : 'medium',
      references,
      cleanPlate,
      setAnchorDataUrl: options.setAnchorDataUrl || '',
      setMaskDataUrl: options.setMaskDataUrl || '',
      setHandAnchorDataUrl: options.setHandAnchorDataUrl || ''
    });
    JSON.parse(requestBody);
    try {
      const payload = await studio.services.request.requestJson(`${baseUrl}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8', ...accessHeaders },
        body: new Blob([requestBody], { type: 'application/json; charset=utf-8' }),
        timeoutMs: studio.services.request.timeouts.generation,
        signal: options.signal,
        requestId
      });
      if (!Array.isArray(payload.images) || !payload.images.length) throw new Error('GPT 未返回图片');
      return { ...payload, request: { requestId, references, hasSetAnchor, cleanPlate, prompt: result.text, ratio: options.ratio || studio.state.prompt.ratio || '3:4', quality: options.quality === 'high' ? 'high' : 'medium' } };
    } catch (error) {
      if (error.code === 'http_501' && ['127.0.0.1', 'localhost'].includes(location.hostname)) {
        throw new Error('当前仍连接旧版 Python 静态预览，无法转发生图请求。请关闭旧预览窗口并重新双击“启动本地预览.command”。');
      }
      const failure = new Error(studio.services.request.generationFailureMessage(error));
      failure.code = error.code || 'generation_error';
      failure.requestId = error.requestId || requestId;
      throw failure;
    }
  }

  async function generateConversationJobs(jobs, options = {}) {
    const baseUrl = studio.services.sceneAnalysis.apiBaseUrl();
    if (!baseUrl) throw new Error('尚未配置生图服务端地址');
    if (!Array.isArray(jobs) || !jobs.length) throw new Error('多轮生图任务为空');
    const requestId = globalThis.crypto?.randomUUID?.() || `conversation-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const accessHeaders = await studio.services.accessSession.authorizationHeader(baseUrl);
    const normalizedJobs = await Promise.all(jobs.map(async job => {
      const cleanPlate = job.mode === 'plate';
      return {
        key: job.result.key,
        mode: cleanPlate ? 'plate' : 'shot',
        prompt: job.prompt || job.result.text,
        previousResponseId: job.previousResponseId || '',
        handAnchorDataUrl: job.handAnchorDataUrl || '',
        references: await requestReferencesFor(job.result, { cleanPlate, hasSetAnchor: !cleanPlate })
      };
    }));
    const requestBody = JSON.stringify({
      requestId,
      userId: anonymousUserId(),
      jobs: normalizedJobs,
      ratio: options.ratio || studio.state.prompt.ratio || '3:4',
      quality: options.quality === 'high' ? 'high' : 'medium',
      setAnchorDataUrl: options.setAnchorDataUrl || ''
    });
    JSON.parse(requestBody);
    try {
      const payload = await studio.services.request.requestJson(`${baseUrl}/api/generate-conversation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8', ...accessHeaders },
        body: new Blob([requestBody], { type: 'application/json; charset=utf-8' }),
        timeoutMs: studio.services.request.timeouts.generation,
        signal: options.signal,
        requestId
      });
      if (!Array.isArray(payload.results)) throw new Error('多轮生图没有返回可确认结果');
      return {
        ...payload,
        request: { requestId, jobs: normalizedJobs, ratio: options.ratio || studio.state.prompt.ratio || '3:4', quality: options.quality === 'high' ? 'high' : 'medium' }
      };
    } catch (error) {
      const failure = new Error(studio.services.request.generationFailureMessage(error));
      failure.code = error.code || 'conversational_generation_error';
      failure.requestId = error.requestId || requestId;
      throw failure;
    }
  }

  studio.services.imageGeneration = {
    anonymousUserId,
    absoluteAssetUrl,
    referencesFor,
    requestAssetUrl,
    requestReferencesFor,
    setEditProfile,
    createSetLock,
    blendProtectedPixels,
    protectSetBackground,
    dataUrlImage,
    generate,
    generateConversationJobs
  };
})(globalThis.BayerStudio);


(function registerExperienceGenerationService(studio) {
  'use strict';

  const maxUploadBytes = 8 * 1024 * 1024;
  const maxSourceBytes = 60 * 1024 * 1024;
  const targetTransferBytes = 7 * 1024 * 1024;
  const maxTransferDimension = 4096;

  function apiBaseUrl() {
    const local = ['127.0.0.1', 'localhost'].includes(location.hostname);
    const live = new URLSearchParams(location.search).get('experienceLive') === '1';
    if (local && !live) return location.origin;
    return studio.services.sceneAnalysis.apiBaseUrl();
  }

  function isLiveMode() {
    return new URLSearchParams(location.search).get('experienceLive') === '1';
  }

  function readDataUrl(file, label) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = () => reject(new Error(`无法读取${label}`));
      reader.readAsDataURL(file);
    });
  }

  function needsOptimization(file) {
    return Number(file?.size || 0) > maxUploadBytes;
  }

  function canvasBlob(canvas, quality) {
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('无法生成图片传输副本')), 'image/jpeg', quality);
    });
  }

  async function optimizedTransferBlob(file, label) {
    let bitmap;
    try {
      bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
      const initialScale = Math.min(1, maxTransferDimension / Math.max(bitmap.width, bitmap.height));
      let width = Math.max(1, Math.round(bitmap.width * initialScale));
      let height = Math.max(1, Math.round(bitmap.height * initialScale));
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d', { alpha: false });
      if (!context) throw new Error('当前浏览器无法处理大图');
      for (let resizeRound = 0; resizeRound < 6; resizeRound += 1) {
        canvas.width = width;
        canvas.height = height;
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, width, height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';
        context.drawImage(bitmap, 0, 0, width, height);
        for (const quality of [0.95, 0.9, 0.84, 0.76]) {
          const blob = await canvasBlob(canvas, quality);
          if (blob.size <= targetTransferBytes) return blob;
        }
        width = Math.max(1, Math.round(width * 0.82));
        height = Math.max(1, Math.round(height * 0.82));
      }
      throw new Error(`${label}内容过于复杂，自动优化后仍超过安全传输上限`);
    } catch (error) {
      if (/自动优化|安全传输|浏览器/.test(error.message || '')) throw error;
      throw new Error(`无法自动优化${label}：${error.message || '图片解码失败'}`);
    } finally {
      bitmap?.close?.();
    }
  }

  async function fileDataUrl(file, label) {
    if (!file || !String(file.type || '').startsWith('image/')) throw new Error(`${label}必须是图片`);
    if (file.size > maxSourceBytes) throw new Error(`${label}超过60MB，浏览器无法安全处理这张超大原图`);
    if (!needsOptimization(file)) return readDataUrl(file, label);
    const optimized = await optimizedTransferBlob(file, label);
    return readDataUrl(optimized, label);
  }

  async function post(path, body, options = {}) {
    const base = apiBaseUrl();
    if (!base) throw new Error('尚未配置体验生图服务端地址');
    const requestId = globalThis.crypto?.randomUUID?.() || `experience-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const accessHeaders = await studio.services.accessSession.authorizationHeader(base);
    try {
      return await studio.services.request.requestJson(`${base}${path}`, {
        method: 'POST',
        headers: accessHeaders,
        body: { ...body, requestId, userId: studio.services.imageGeneration.anonymousUserId() },
        timeoutMs: path.endsWith('/prompt') ? studio.services.request.timeouts.prompt : studio.services.request.timeouts.generation,
        signal: options.signal,
        requestId
      });
    } catch (error) {
      if (path.endsWith('/generate')) {
        const failure = new Error(studio.services.request.generationFailureMessage(error));
        failure.code = error.code;
        failure.requestId = error.requestId || requestId;
        throw failure;
      }
      throw error;
    }
  }

  function buildPrompt(input, options) {
    return post('/api/experience/prompt', input, options);
  }

  function generate(input, options) {
    return post('/api/experience/generate', input, options);
  }

  studio.services.experienceGeneration = { fileDataUrl, needsOptimization, buildPrompt, generate, isLiveMode };
})(globalThis.BayerStudio);


(function registerReviewHistoryService(studio) {
  'use strict';

  const localKey = 'bayer-review-history-pending-v1';
  const maxPreviewLength = 450000;
  const previewLongEdge = 1024;
  const memoryCache = new Map();
  const imageObjectUrls = new Map();

  function apiUrl(path) {
    const base = studio.services.sceneAnalysis.reviewApiBaseUrl();
    if (!base) throw new Error('尚未配置评审服务端地址');
    return `${base}${path}`;
  }

  function pending() {
    return studio.services.storage.read(localKey, []);
  }

  function rememberPending(record) {
    const records = pending().filter(item => item.id !== record.id);
    records.unshift({ ...record, syncState: 'pending' });
    if (!studio.services.storage.write(localKey, records)) throw new Error('浏览器临时历史空间不足，请保持本页打开并检查网络后重试同步');
  }

  function clearPending(id) {
    studio.services.storage.write(localKey, pending().filter(item => item.id !== id));
  }

  function loadImage(dataUrl) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('无法读取评审预览图'));
      image.src = dataUrl;
    });
  }

  async function previewDataUrl(dataUrl) {
    if (!/^data:image\/(?:jpeg|png|webp);base64,/.test(dataUrl || '')) throw new Error('缺少有效评审预览图');
    const image = await loadImage(dataUrl);
    const scale = Math.min(1, previewLongEdge / Math.max(image.naturalWidth, image.naturalHeight));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const context = canvas.getContext('2d');
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    for (const quality of [0.82, 0.76, 0.70, 0.64, 0.58, 0.52, 0.46, 0.40, 0.34, 0.30]) {
      const preview = canvas.toDataURL('image/jpeg', quality);
      if (preview.length <= maxPreviewLength) return preview;
    }
    throw new Error('1024像素评审预览图压缩后仍超过450KB');
  }

  function compactReferences(references = []) {
    return references.slice(0, 8).map(reference => {
      const url = String(reference?.url || reference?.image || '');
      const uploaded = /^data:image\//.test(url) || /^blob:/.test(url);
      return {
        role: String(reference?.role || '').slice(0, 80),
        label: String(reference?.label || '').slice(0, 160),
        url: uploaded ? '' : url.slice(0, 1000),
        source: uploaded ? 'user-upload-not-retained' : 'catalog'
      };
    });
  }

  async function compactRecord(record) {
    const source = record.previewDataUrl || record.imageDataUrl;
    const preview = await previewDataUrl(source);
    const { imageDataUrl, ...metadata } = record;
    return { ...metadata, references: compactReferences(record.references), previewDataUrl: preview };
  }

  async function post(record) {
    const headers = await studio.services.accessSession.authorizationHeader(studio.services.sceneAnalysis.reviewApiBaseUrl());
    const response = await fetch(apiUrl('/api/reviews'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers },
      body: JSON.stringify({ ...record, userId: studio.services.imageGeneration.anonymousUserId() })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload.error || `评审同步失败（${response.status}）`);
    clearPending(record.id);
    memoryCache.clear();
    return payload.review;
  }

  async function save(record) {
    const compact = await compactRecord(record);
    try {
      return await post(compact);
    } catch (error) {
      try {
        rememberPending(compact);
      } catch (storageError) {
        throw new Error(`${error.message}；${storageError.message}`);
      }
      throw error;
    }
  }

  async function syncPending() {
    const records = [...pending()];
    for (const record of records) {
      try {
        const compact = await compactRecord(record);
        rememberPending(compact);
        await post(compact);
      } catch (error) {
        // 保留本地记录；本次刷新不反复请求同一失败项。
      }
    }
  }

  async function listPage(limit = 30, offset = 0) {
    await syncPending();
    const headers = await studio.services.accessSession.authorizationHeader(studio.services.sceneAnalysis.reviewApiBaseUrl());
    const safeLimit = Math.max(1, Math.min(60, limit));
    const safeOffset = Math.max(0, Math.floor(Number(offset) || 0));
    const response = await fetch(apiUrl(`/api/reviews?limit=${safeLimit}&offset=${safeOffset}`), { cache: 'no-store', headers });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload.error || `读取历史评审失败（${response.status}）`);
    const remoteReviews = payload.reviews || [];
    const localPending = safeOffset === 0 ? pending().filter(item => !remoteReviews.some(remote => remote.id === item.id)) : [];
    const selected = [...remoteReviews, ...localPending].sort((left, right) => String(right.createdAt || '').localeCompare(String(left.createdAt || '')));
    await Promise.all(selected.map(async review => {
      if (!review.imageUrl || review.previewDataUrl || imageObjectUrls.has(review.id)) return;
      try {
        const imageResponse = await fetch(review.imageUrl, { cache: 'no-store', headers });
        if (!imageResponse.ok) return;
        const objectUrl = URL.createObjectURL(await imageResponse.blob());
        imageObjectUrls.set(review.id, objectUrl);
        review.previewDataUrl = objectUrl;
      } catch (error) {
        // 图片暂时不可用时仍展示历史元数据。
      }
    }));
    return {
      reviews: selected,
      total: Math.max(selected.length, Number(payload.total) || 0),
      nextOffset: Math.max(safeOffset + remoteReviews.length, Number(payload.nextOffset) || 0),
      hasMore: Boolean(payload.hasMore)
    };
  }

  async function list(limit = 30) {
    return (await listPage(limit, 0)).reviews;
  }

  async function qualityMemory(options = {}) {
    const context = {
      brandId: String(options.brandId || studio.state.prompt?.brandId || 'bayer'),
      productId: String(options.productId || studio.state.prompt?.productId || 'shiguang'),
      combo: String(options.combo || ''),
      presentation: String(options.presentation || ''),
      visualStyle: String(options.visualStyle || '')
    };
    const key = JSON.stringify(context);
    const cached = memoryCache.get(key);
    if (!options.force && cached && Date.now() - cached.loadedAt < 5 * 60 * 1000) return cached.guide;
    try {
      const query = new URLSearchParams(context);
      const headers = await studio.services.accessSession.authorizationHeader(studio.services.sceneAnalysis.reviewApiBaseUrl());
      const response = await fetch(apiUrl(`/api/review-memory?${query}`), { cache: 'no-store', headers });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.error || `读取质量记忆失败（${response.status}）`);
      const guide = String(payload.guide || '');
      memoryCache.set(key, { loadedAt: Date.now(), guide });
      return guide;
    } catch (error) {
      memoryCache.set(key, { loadedAt: Date.now(), guide: '' });
      return '';
    }
  }

  studio.services.reviewHistory = { save, list, listPage, qualityMemory, pending, syncPending, compactReferences };
})(globalThis.BayerStudio);


(function registerAssetPlanner(studio) {
  'use strict';

  const cameraAliases = {
    '平视': ['eye', 'slightTop'],
    '轻微俯拍': ['slightTop', 'eye'],
    '高位俯拍': ['highTop'],
    '低机位仰拍': ['low']
  };

  function materialScore(material, request) {
    let score = 0;
    const reasons = [];
    if (!material || material.deleted) return { score: -Infinity, reasons: ['素材不可用'] };
    if (request.presentation === '手持') {
      if (material.format === '手持' || (material.detailTags || []).includes('手持')) { score += 35; reasons.push('参考图含真实手持关系'); }
      else score -= 20;
    } else if (material.format === '静置' || material.shot === '静置') { score += 24; reasons.push('参考图摆放方式匹配'); }
    if (!request.visualStyle || material.style === request.visualStyle) { score += 18; reasons.push('视觉风格匹配'); }
    if (!request.cameraAngle || material.cameraAngle === request.cameraAngle) { score += 24; reasons.push('拍摄机位匹配'); }
    if ((material.productForms || []).includes(request.combo)) { score += 16; reasons.push('产品组合标签匹配'); }
    if (material.scene === '生活感') { score += 6; reasons.push('具备自然生活感'); }
    return { score, reasons };
  }

  function productAssetScore(asset, request) {
    let score = 0;
    const reasons = [];
    const compatible = cameraAliases[request.cameraAngle] || [];
    if (asset.role === 'identity-master') { score += 15; reasons.push('作为包装身份校验母版'); }
    if (request.presentation === '手持' && /handheld/.test(asset.role)) { score += 45; reasons.push('真实手持姿态匹配'); }
    if (request.presentation !== '手持' && /static|combination/.test(asset.role)) { score += 30; reasons.push('真实静置姿态匹配'); }
    if ((asset.cameraTypes || []).some(type => compatible.includes(type))) { score += 28; reasons.push('产品实拍机位与场景接近'); }
    if (request.subjectOrientation && asset.subjectOrientation === request.subjectOrientation) { score += 12; reasons.push('产品朝向匹配'); }
    return { score, reasons };
  }

  function chooseBest(items, scorer, request) {
    return items.map(item => ({ item, ...scorer(item, request) })).sort((a, b) => b.score - a.score)[0] || null;
  }

  function planLibrarySelection({ materials, sku, request }) {
    if (!sku || sku.status !== 'ready') return { status: 'blocked', confidence: 0, blockers: ['所选 SKU 尚未完成产品档案，不能进入付费生图'] };
    if (sku.manualSelectionRequired) return { status: 'blocked', confidence: 0, blockers: ['该 SKU 当前需要人工选择产品图，请使用“手动选图 / 上传”'] };
    const scene = chooseBest(materials || [], materialScore, request);
    const poseAssets = (sku.assets || []).filter(asset => asset.role !== 'identity-master');
    const product = chooseBest(poseAssets, productAssetScore, request);
    const identity = (sku.assets || []).find(asset => asset.role === 'identity-master');
    const blockers = [];
    if (!scene || !Number.isFinite(scene.score)) blockers.push('没有可用场景参考');
    if (!product) blockers.push('没有匹配的真实产品姿态参考');
    if (!identity) blockers.push('缺少产品身份母版');
    const confidence = blockers.length ? 0 : Math.max(0, Math.min(100, Math.round((scene.score + product.score) / 1.35)));
    if (confidence < 55 && !blockers.length) blockers.push('产品角度与场景机位置信度过低，请人工更换参考图');
    return {
      status: blockers.length ? 'blocked' : 'ready', confidence, blockers,
      scene: scene?.item || null, productAsset: product?.item || null, identityAsset: identity || null,
      reasons: [...(scene?.reasons || []), ...(product?.reasons || [])]
    };
  }

  function productReferencePreflight({ productCategory = '', productAsset = null, outputProfile = {} } = {}) {
    const blockers = [];
    const warnings = [];
    const checks = [];
    if (!productAsset) return { status: 'ready', blockers, warnings, checks };
    const description = `${productAsset.productForm || ''} ${productAsset.label || ''} ${productAsset.subjectOrientation || ''} ${productAsset.visibleFaces || ''}`;
    const isDiaper = /母婴护理|纸尿裤|白片/.test(`${productCategory} ${description}`);
    if (isDiaper && Number(outputProfile.productCount) === 1) {
      if (/多片|两片|组合|双包装/.test(description)) blockers.push('首轮测试只允许一片纸尿裤，当前产品参考包含两片、多片或组合，请改选“手持单片 · 掌心承托 G”');
      else checks.push('产品参考只展示一片纸尿裤');
    }
    if (isDiaper && outputProfile.excludePackaging && /包装/.test(description)) blockers.push('首轮测试不允许外包装，请改选单片白片参考');
    if (isDiaper && outputProfile.excludeHands && /手持|手部|掌心|夹持/.test(description)) warnings.push('参考图中的手仅用于确认产品姿态，生成结果必须移除人物和手');
    return { status: blockers.length ? 'blocked' : 'ready', blockers, warnings, checks };
  }

  function structuredPromptPlan(input) {
    const exactBackground = input.backgroundMode === 'exact';
    const productForm = input.productForm || '当前所选产品';
    const genericProductSet = Boolean(input.genericProductSet);
    const isDiaper = !genericProductSet && /纸尿裤|白片/.test(`${input.productCategory || ''} ${productForm} ${input.productLabel || ''}`);
    const productRule = genericProductSet
      ? '这是由多个独立产品形态组成的套图。每个镜头绑定的产品原图是该镜头唯一产品外观依据：组合图保持组合，单片保持单片，外包装保持外包装；不同镜头之间不得串用、拆分、增减或互换产品形态，不得推测、补画或重构原图未展示的产品结构。每张原图都是当前镜头不可修改的像素身份依据。'
      : isDiaper
      ? '当前所选白片纸尿裤图片是唯一产品外观依据。只生成一片白片纸尿裤，不生成外包装、额外纸尿裤、人物或手；保持图片中已展示的轮廓、展开方式、正反面、花纹、腰围、腿围、厚度和长宽比例，不得推测或补画未展示结构。'
      : '当前所选产品图片是唯一产品外观依据。只生成图片中明确展示的产品、包装面、品牌、文字、主色、轮廓和比例；不得推测、镜像、重绘或补全未展示结构。';
    const materialRule = isDiaper
      ? '保持纸尿裤真实的柔软无纺布、吸收芯体厚度、弹性腰围和自然弯曲折叠；服从重力，不得变成硬塑料、纸板、悬浮物或不自然的完全平板。'
      : '保持产品原有材质、厚度、折痕和受力状态，服从重力，不得悬浮或变成不相符的材质。';
    const backgroundRule = exactBackground
      ? '客户要求优先：严格复刻参考图背景的构图、机位、裁切、家具、道具、材质、光线和空间关系；不更换、不增减、不重排背景元素，只在合理位置自然融入产品。'
      : '参考场景执行“约70%视觉基因保留、约30%画面重构”，不是把产品粘贴到原背景。保留场景用途、整体色调、光线方向与软硬、材质气质、生活感/精致感/素人感、空间层次和真实摄影质感；允许并鼓励改变景别、焦距感、相机距离、适度机位高度、画幅裁切、产品位置、局部家具布局、道具款式和材质细节。最终画面必须至少有三处一眼可见的差异，且背景仍可辨认为同一种生活语境；禁止生成与参考图近乎相同的背景。';
    const finalPrompt = [
      input.userGoal || '生成自然真实、适合小红书内容的产品场景图。',
      backgroundRule,
      input.sceneGuide ? `隐藏场景分析结论（只供模型执行，不在页面展示）：${input.sceneGuide}` : '',
      '必须保持参考场景的整体空间属性：室内仍为室内、户外仍为户外、半户外仍保留门窗或露台等边界关系。不能因为室内出现绿植就改成户外，也不能把户外绿植语境缩成室内盆栽。',
      '若参考图含标题、花字、箭头、贴纸或广告排版，删除这些后把其占据区域恢复成与周围一致的干净背景，并保留该区域作为排版负空间；不得用产品、道具或纹理填满。',
      '参考场景图只用于环境、机位、构图、光线和空间关系。必须移除参考场景中原有的产品、包装、药瓶、药板、药片、品牌文字和标识，不得保留、复刻或改造成新产品；最终画面只允许出现当前所选产品图指定的产品。',
      productRule,
      '产品原图是不可修改的产品像素身份层。优先保留原始产品区域的可见像素、Logo、包装文字、字块位置、图案、折痕和边缘；只在轮廓外生成背景，并在最小边缘范围补接触阴影、反射、景深与颗粒过渡。禁止生成近似文字、乱码或重画包装。',
      input.relativeScaleCovered ? '产品图及同档案组合实拍已提供真实相对比例依据；产品在场景中的大小必须符合承托面、家具和拍摄距离。' : '以产品图中的长宽和厚度作为当前真实相对比例依据，并根据承托面和拍摄距离确定合理大小。',
      '本平台的核心目标是展示当前产品。产品必须是画面唯一商业主体、第一视觉落点和最清晰区域；采用中近景或近景，让产品主体组合约占画面28%至45%，正面或当前可见面清楚可读。环境只作陪衬；禁止大面积墙面、家具、空白或道具比产品更抢眼，也禁止把产品缩小后孤零零放在远景中。可以改变参考图的景别、裁切和拍摄距离来满足主体占比。',
      materialRule,
      '围绕产品建立真实使用情境，可用1至3件普通生活道具形成自然视觉关系，但道具不得遮挡品牌与主要可见面。产品底面必须完全落在承托面的有效边界内，禁止一半落在桌上、一半跨出桌沿，禁止悬浮；建立连续合理的接触阴影、前后遮挡、环境反射、色温、景深和边缘光。边缘锐度、颗粒和透视必须与场景一致，禁止抠图感、透明叠加、双重边缘和旧产品残影。',
      '整体呈现自然生活化的手机摄影质感，不做电商白底棚拍，不添加标题、花字、水印、促销标识或其他品牌产品。',
      `图片比例为${input.ratio || '3:4'}。`
    ].filter(Boolean).join('\n');
    return {
      schema: 'visual-studio-structured-prompt-v1',
      mode: input.mode || 'library',
      genericProductSet,
      userGoal: input.userGoal || '生成自然真实、适合社交内容的产品场景图',
      backgroundMode: exactBackground ? 'exact' : 'adaptive',
      sceneKeep: exactBackground
        ? ['严格复刻参考图的背景布局、机位、裁切、物件、材质、光线和空间关系']
        : ['保留参考图约70%的视觉基因：场景用途、整体色调、光线方向与软硬、材质气质、空间层次和内容风格'],
      sceneChange: exactBackground
        ? ['不主动更换、增减或重排背景元素；仅在必要区域自然融入产品']
        : ['至少重构约30%的画面：允许改变景别、焦距感、相机距离、适度机位高度、裁切、产品位置、局部家具布局与道具细节；至少三处清晰差异，禁止近似复制原图'],
      productIdentityLock: ['包装文字、品牌标识、主色、轮廓、比例和已展示包装面必须保持一致', '不得推测或生成产品图中未展示的包装面'],
      placementAndSupport: ['产品是第一视觉落点，主体组合约占画面28%至45%，环境不得抢主体', '产品必须有符合重力的承托、接触阴影、遮挡、反射和一致景深'],
      lightingIntegration: ['允许调整产品亮度、环境反射和边缘光，使产品自然融入环境', '不得以光影调整为由改变产品身份'],
      forbiddenChanges: ['必须移除参考场景中的原产品、包装、药瓶、药板、药片及其品牌文字和标识', '禁止重绘包装、镜像文字、改变 SKU、凭空增加产品或手指'],
      selectedAssets: input.selectedAssets || [],
      selectionReasons: input.selectionReasons || [],
      finalPrompt
    };
  }

  function fusionPreflight({ mode = 'library', sku, selectionPlan, productUploaded = false, sceneUploaded = false }) {
    const blockers = [];
    const warnings = [];
    if (mode === 'custom-upload') {
      if (!productUploaded) blockers.push('缺少产品图');
      if (!sceneUploaded) blockers.push('缺少参考场景图');
      warnings.push('系统按所选产品图自动锁定角度、可见面和身份信息，不会推测未展示结构');
    } else {
      if (!sku || sku.status !== 'ready') blockers.push('所选 SKU 档案尚未完成');
      if (!selectionPlan || selectionPlan.status !== 'ready') blockers.push(...(selectionPlan?.blockers || ['尚未完成产品与场景自动选材']));
      if (selectionPlan?.status === 'ready' && Number(selectionPlan.confidence) < 55) blockers.push('自动选材置信度低于55%');
      if (selectionPlan?.status === 'ready' && !selectionPlan.productAsset) blockers.push('缺少真实产品姿态参考');
      if (selectionPlan?.status === 'ready' && !selectionPlan.identityAsset) blockers.push('缺少产品身份母版');
      if (selectionPlan?.status === 'ready' && !selectionPlan.scene) blockers.push('缺少场景参考');
    }
    return {
      schema: 'fusion-preflight-v1',
      status: blockers.length ? 'blocked' : 'ready',
      blockers: [...new Set(blockers)],
      warnings,
      checks: mode === 'custom-upload'
        ? ['已选择产品图', '已选择参考场景图', '产品角度与可见面由所选图片自动锁定', '环境按本次背景设置执行']
        : ['SKU档案可用', '产品姿态与场景机位匹配', '产品身份母版可用', '自动选材置信度达标']
    };
  }

  const outputQaItems = [
    { id: 'identity', label: '产品身份', detail: '品牌、文字、主色、轮廓和可见包装面正确', critical: true },
    { id: 'geometry', label: '比例与透视', detail: '产品大小、方向和透视符合场景机位', critical: true },
    { id: 'support', label: '承托与遮挡', detail: '符合重力，接触位置和前后遮挡自然', critical: true },
    { id: 'shadow', label: '接触阴影', detail: '落地阴影方向、软硬和强度合理', critical: true },
    { id: 'light', label: '光线与边缘', detail: '亮度、反射、边缘光与环境一致，无抠图感', critical: true },
    { id: 'background7030', label: '背景执行', detail: '70%视觉基因成立且至少30%画面明显重构，或符合严格复刻要求', critical: false },
    { id: 'artifacts', label: '无异常增生', detail: '没有多余产品、手指、文字或破损边缘', critical: true },
    { id: 'naturalness', label: '整体自然度', detail: '画面真实自然，符合精致或素人内容语境', critical: true }
  ];

  function evaluateOutputQa(checks = {}) {
    const failed = outputQaItems.filter(item => !checks[item.id]);
    return {
      schema: 'fusion-output-qa-v1',
      status: failed.length ? 'rejected' : 'approved',
      passed: outputQaItems.filter(item => checks[item.id]).map(item => item.id),
      failed: failed.map(item => item.id),
      criticalFailed: failed.filter(item => item.critical).map(item => item.id)
    };
  }

  studio.services.assetPlanner = { materialScore, productAssetScore, planLibrarySelection, productReferencePreflight, structuredPromptPlan, fusionPreflight, outputQaItems, evaluateOutputQa };
})(globalThis.BayerStudio);


(function registerVariationPlanner(studio) {
  'use strict';

  const plans = [
    { camera: '与桌面齐平的侧前方近景', cameraType: 'low', furniture: '书桌', position: '画面左下方', light: '左侧窗边自然散射光' },
    { camera: '站立视角轻微俯拍', cameraType: 'slightTop', furniture: '餐桌', position: '画面中下部', light: '右后方窗光与轻微环境阴影' },
    { camera: '贴近桌面的斜向近景', cameraType: 'oblique', furniture: '梳妆台', position: '画面右下方', light: '正前方柔和日光' },
    { camera: '稍远的环境式高位俯拍', cameraType: 'highTop', furniture: '床头柜', position: '画面偏左中部', light: '侧后方自然光并保留真实阴影' },
    { camera: '肩部高度的自然平视', cameraType: 'eye', furniture: '书桌', position: '画面偏右中部', light: '窗帘过滤的中性日光' },
    { camera: '从桌角方向拍摄的对角线构图', cameraType: 'oblique', furniture: '餐桌', position: '画面左侧三分之一处', light: '左前方清透日光' },
    { camera: '稍高但不完全垂直的俯视', cameraType: 'highTop', furniture: '梳妆台', position: '画面右侧三分之一处', light: '右侧柔光与弱对比阴影' },
    { camera: '近距离轻微俯拍细节特写', cameraType: 'slightTop', furniture: '床头柜', position: '画面中心略偏下', light: '均匀中性自然光' }
  ];

  const propFamilies = {
    '书桌': ['合上的笔记本', '素色水杯', '一支笔'],
    '餐桌': ['透明水杯', '浅色陶瓷盘', '折叠餐巾'],
    '梳妆台': ['小型桌面镜', '梳子', '中性色收纳盒'],
    '床头柜': ['台灯', '香薰', '封闭的纸质读物']
  };

  function planVariation(item, variantIndex) {
    const plan = plans[variantIndex % plans.length];
    return {
      ...plan,
      props: propFamilies[plan.furniture],
      hand: variantIndex % 2 ? '自然放松的单手持物' : '自然微弯的手臂与手部',
      seed: `${item.id}-${variantIndex}`
    };
  }

  studio.prompt.planVariation = planVariation;
})(globalThis.BayerStudio);


(function registerProductReferences(studio) {
  'use strict';
  const { textHash } = studio.utils;

  const cameraRanks = { '低机位仰拍': 0, '平视': 1, '轻微俯拍': 2, '高位俯拍': 3 };
  const poseRanks = { '直立': 0, '侧躺': 1, '正面朝上平放': 2 };

  function normalizePose(value) {
    const text = String(value || '');
    if (/手持/.test(text)) return '手持';
    if (/正面朝上|平放|俯拍平躺/.test(text)) return '正面朝上平放';
    if (/侧躺|横放|躺放/.test(text)) return '侧躺';
    if (/直立|竖立|立放|站立/.test(text)) return '直立';
    return '';
  }

  function sourceProduct(fingerprint) {
    return fingerprint?.sourceProduct || fingerprint?.product || null;
  }

  function desiredPose(item, fingerprint) {
    const source = sourceProduct(fingerprint);
    const detected = normalizePose(source?.pose || source?.placement || '');
    if (detected === '手持') return '直立';
    if (detected) return detected;
    if (item.format === '手持' || item.shot === '手持') return '直立';
    return '';
  }

  function cameraDistance(candidate, target) {
    if (!target) return 0;
    return Math.abs((cameraRanks[candidate] ?? 1) - (cameraRanks[target] ?? 1));
  }

  function poseDistance(candidate, target) {
    if (!target) return 0;
    if (candidate === target) return 0;
    return Math.abs((poseRanks[candidate] ?? 1) - (poseRanks[target] ?? 1)) + 1;
  }

  function facePenalty(candidate, desired) {
    if (!desired) return 0;
    const faces = String(desired).split(/[＋+、,，]/).filter(Boolean);
    if (!faces.length) return 0;
    return faces.some(face => String(candidate || '').includes(face)) ? 0 : 1;
  }

  function chooseCatalogAngle(files, item, variation, variantIndex, salt, fingerprint) {
    const cameraType = variation.cameraType || 'slightTop';
    const source = sourceProduct(fingerprint);
    const targetPose = desiredPose(item, fingerprint);
    const targetCamera = source?.cameraAngle || item.cameraAngle || '';
    const targetOrientation = source?.orientation || source?.subjectOrientation || item.subjectOrientation || '';
    const targetFaces = source?.visibleFaces || '';

    const scored = files.map(angle => {
      const parts = {
        pose: poseDistance(angle.pose, targetPose) * 100,
        camera: cameraDistance(angle.cameraAngle, targetCamera) * 12,
        orientation: targetOrientation && targetOrientation !== '不限' && angle.subjectOrientation !== targetOrientation ? 5 : 0,
        faces: facePenalty(angle.visibleFaces, targetFaces) * 3,
        plannedCamera: angle.compatibleCameraTypes.includes(cameraType) ? 0 : 2
      };
      return { angle, parts, score: Object.values(parts).reduce((sum, value) => sum + value, 0) };
    });
    const bestScore = Math.min(...scored.map(entry => entry.score));
    const candidates = scored.filter(entry => entry.score === bestScore);
    const picked = candidates[textHash(`${salt}|${item.id}|${variation.position}|${variantIndex}`) % candidates.length];
    const selected = picked.angle;
    const cameraMatch = targetCamera ? (selected.cameraAngle === targetCamera ? 'exact' : 'nearest') : 'planned';
    const orientationMatch = !targetOrientation || targetOrientation === '不限' ? 'unrestricted' : (selected.subjectOrientation === targetOrientation ? 'exact' : 'nearest');
    const poseMatch = targetPose ? (selected.pose === targetPose ? 'exact' : 'nearest') : 'unrestricted';
    const reasonParts = [];
    if (targetPose) reasonParts.push(poseMatch === 'exact' ? `物理姿态“${targetPose}”精确匹配` : `暂无“${targetPose}”实拍图，自动采用最接近的“${selected.pose}”`);
    if (targetCamera) reasonParts.push(cameraMatch === 'exact' ? `机位“${targetCamera}”精确匹配` : `暂无“${targetCamera}”产品实拍图，机位自动采用最接近的“${selected.cameraAngle}”`);
    if (targetOrientation && targetOrientation !== '不限') reasonParts.push(orientationMatch === 'exact' ? `朝向“${targetOrientation}”精确匹配` : `朝向自动采用最接近的“${selected.subjectOrientation}”`);
    if (!reasonParts.length) reasonParts.push(`方案机位“${variation.camera}”匹配 ${cameraType} 实拍角度组`);
    return {
      ...selected,
      cameraType,
      cameraMatch,
      orientationMatch,
      poseMatch,
      desiredPose: targetPose,
      score: picked.score,
      scoreParts: picked.parts,
      reason: reasonParts.join('；')
    };
  }

  function chooseAngle(item, variation, variantIndex, fingerprint) {
    return chooseCatalogAngle(studio.data.products.angleFiles, item, variation, variantIndex, 'box', fingerprint);
  }

  function chooseComboAngle(item, variation, variantIndex, fingerprint) {
    return chooseCatalogAngle(studio.data.products.comboAngleFiles, item, variation, variantIndex, 'box-blister', fingerprint);
  }

  function productReference(item, variation, variantIndex, combo, fingerprint, options = {}) {
    const products = studio.data.products;
    const normalizedCombo = combo === '药片细节' ? '药片' : combo;
    const additionalReferences = [];
    if (options.blisterState === '正在服用（有空泡罩）' && ['包装盒＋药板', '药板'].includes(normalizedCombo)) {
      additionalReferences.push({ image: products.root + products.usedBlister.file, label: products.usedBlister.label, kind: 'use-state' });
    }
    if (normalizedCombo === '药片') {
      const supports = {
        '掌心承托': products.tabletPalm,
        '指尖横向夹持': products.tabletHorizontal,
        '指尖竖向夹持': products.tabletVertical
      };
      const support = supports[options.tabletSupport];
      if (support) additionalReferences.push({ image: products.root + support.file, label: support.label, kind: 'support' });
    }
    const proportionReference = { image: products.root + products.proportionReference.file, label: products.proportionReference.label, kind: 'proportion' };
    if (normalizedCombo === '包装盒＋药板') {
      const angle = chooseComboAngle(item, variation, variantIndex, fingerprint);
      return { image: products.root + angle.file, label: `包装盒＋药板 · ${angle.label}`, angle, kind: 'box-blister', additionalReferences, proportionReference };
    }
    if (normalizedCombo === '药板') return { image: products.root + products.blister.file, label: products.blister.label, kind: 'blister', additionalReferences, proportionReference };
    if (normalizedCombo === '药片') return { image: products.root + products.tablet.file, label: products.tablet.label, kind: 'tablet', additionalReferences, proportionReference };
    const angle = chooseAngle(item, variation, variantIndex, fingerprint);
    return { image: products.root + angle.file, label: `包装盒 · ${angle.label}`, angle, kind: 'box', additionalReferences, proportionReference };
  }

  studio.prompt.chooseAngle = chooseAngle;
  studio.prompt.chooseComboAngle = chooseComboAngle;
  studio.prompt.productReference = productReference;
})(globalThis.BayerStudio);


(function registerPromptRules(studio) {
  'use strict';

  const cameraTone = '色调严格锁定为iPhone 17 Pro Max原相机后置镜头风格与5000K中性日光白平衡。灰卡、白墙、白桌面和包装白色区域必须呈中性白或中性灰，不得出现奶油黄、米黄或暖白。包装盒、药板与药片的所有标准色只以“包装盒、药板与药片 45° 产品标准母版”为准，同一套图禁止出现深紫、蓝紫、亮紫或粉紫之间的色差。禁止复古报纸黄，禁止自动暖化、夕阳光、钨丝灯、暖黄室内灯、暖黄滤镜、金黄高光、棕黄阴影、整体黄偏或橙偏；即使场景参考图本身偏黄，也必须校正回5000K中性日光。';
  const productColorMaster = '套图产品色彩与身份契约（最高优先级）：每个镜头的“包装盒、药板与药片 45° 产品标准母版”是包装盒、药板和粉色药片颜色、品牌身份、盒型、药板格数、文字与图形版式及三者真实比例的唯一标准；禁止复制它的45°姿态。先逐项读取并保持包装正面的品牌Logo、主标题、信息层级、字块位置、图形轮廓、白紫分区边界与可见侧面排版，不得把文字改写成近似字形、乱码或虚构内容；无法确认的小字保持原有字块结构与清晰边缘，禁止生成新的可读词句。当前镜头的产品姿态参考必须精确控制相机相对俯仰、朝向、旋转角、透视缩短、可见面、承托关系，以及包装盒与药板的间距、前后和重叠关系，但该姿态图的紫色色相、饱和度、亮度与白平衡全部无效。使用状态参考只控制空泡罩和破口。任何辅助图均不得覆盖标准母版的颜色与产品身份。';
  const environment = '场景参考图是摄影语言与生活语境参考，不是待逐像素复制的底图。相似尺度定义为约70%视觉基因保留、约30%画面重构：保留同类居家场景、整体色调、自然光方向与软硬、材质气质、生活感/精致感/素人感、空间层次、景深和真实摄影质感；允许并鼓励改变景别、焦距感、相机距离、适度机位高度、画幅裁切、主体位置、局部家具布局、道具款式与材质细节。最终画面必须至少有三处一眼可见的差异，禁止直接复制参考图、生成近乎相同的背景或只在原图上替换产品。产品必须是第一视觉落点和最清晰区域，环境只能陪衬，不得用大面积墙面、家具、空白或道具抢主体。原图简洁时结果也应保持克制，不得凭空添加与场景用途无关的物件；只有用户额外选择的白底道具可以原样复用。画面只出现居家环境，不出现完整人物、户外、门店或药房；洗手台属于允许的居家场景，但不得扩展成完整浴室环境。';
  const reverseEnvironment = environment;
  const noArtwork = '最终画面只保留纯摄影画面与产品包装本身真实文字；禁止额外标题、花字、副标题、广告文案、箭头、贴纸、角标、水印、边框、图文排版和任何后期叠加文字。参考图中的文字和图形标记一律忽略。';
  const bed = '床品只能作为远处背景，产品不得放在床、床单、被子或枕头上。';
  const identity = {
    '包装盒＋药板': '产品参考图是唯一产品外观依据。完整还原图中包装盒的品牌、文字、盒型结构以及完整药板的结构、颜色、比例和二者相对关系；可见文字清晰，不出现错字、乱码、无关Logo或虚构结构。',
    '包装盒': '产品参考图是唯一产品外观依据。完整还原图中的品牌、文字、盒型结构、宽高厚比例和可见包装面；可见文字清晰，不出现错字、乱码、无关Logo或虚构包装面。',
    '药板': '产品参考图是唯一产品外观依据。完整还原图中的药板结构、泡罩数量、紫色材质、边缘轮廓和比例，不改变或补画未显示结构。',
    '药片': '产品参考图是唯一产品外观依据。完整还原图中单颗药片的颜色、形状、厚度、边缘轮廓和比例，不改变或补画未显示结构。',
    '药片细节': '产品参考图是唯一产品外观依据。完整还原图中单颗药片的颜色、形状、厚度、边缘轮廓和比例，不改变或补画未显示结构。'
  };

  const comboSubjects = {
    '包装盒＋药板': '画面主体严格保持产品参考图中的一个包装盒与一板完整药板，二者各自完整、边界清楚且稳定置于同一硬质桌面。药板必须泡罩面朝上平放，整片薄板与桌面平行并形成连续贴近的接触阴影；禁止药板独立直立、斜立、倚靠包装盒或悬空。包装盒必须按参考图姿态以真实接触面落在桌面，接触边缘清楚且有贴近的自然接触阴影；禁止盒底留白、漂浮或仅靠远离盒体的投影制造接触感。不得增加任何未选择的产品形态。',
    '包装盒': '画面主体严格保持产品参考图中的一个包装盒。包装盒必须按参考图姿态以真实接触面落在硬质桌面，接触边缘清楚且有贴近的自然接触阴影；禁止盒底留白、漂浮、悬空或仅靠远离盒体的投影制造接触感。不得增加任何未选择的产品形态。',
    '药板': '画面主体严格保持产品参考图中的一板完整药板。药板必须泡罩面朝上完全平放在硬质桌面，整片薄板与桌面平行，边缘和底面形成连续贴近的接触阴影；禁止独立直立、斜立、倚靠其他物体或悬空。不得增加任何未选择的产品形态。',
    '药片': '画面主体严格保持产品参考图中的单颗药片，并让药片底部真实接触桌面或合适容器，具有贴近且符合体积的接触阴影；禁止悬浮。不得增加任何未选择的产品形态。',
    '药片细节': '画面主体严格保持产品参考图中的单颗药片，并让药片底部真实接触桌面、手部或所选容器，具有贴近且符合体积的接触阴影；禁止悬浮。不得增加任何未选择的产品形态。'
  };

  function useStateRule(combo, blisterState) {
    if (!['包装盒＋药板', '药板'].includes(combo) || blisterState !== '正在服用（有空泡罩）') return '';
    return '药板需要呈现真实服用中的状态，并以泡罩正反面的物理结构正确为最高优先级：清楚显示1至3颗药片已取出，其余泡罩仍保留粉色药片。若镜头主要看见透明塑料泡罩正面，只显示透明空腔、腔壁反光和背后自然透出的局部痕迹，禁止把银色铝箔破口贴在透明泡罩正面；若镜头主要看见铝箔背面，只在背面显示真实穿破的铝箔孔和撕裂边缘；只有轻微斜角确实同时露出两个物理表面时，才可分别在正面看见透明空腔、在背面或翻卷边缘看见对应破口。禁止为同时展示两者而扭曲、翻折或制造双层药板。禁止把空位生成紫色实体凹槽、白色药片、完整未开启泡罩，也禁止整板全部变空。破口不得扩展成药板损坏、脏污或变形。包装盒、药板尺寸、颜色和品牌身份仍以45°产品标准母版为准。';
  }

  function tabletSupportRule(tabletSupport) {
    const rules = {
      '无容器（桌面静置）': '药片细节不使用任何容器或手部，单颗药片稳定静置于干净硬质桌面并保留真实接触阴影。',
      '掌心承托': '药片细节采用掌心承托，以掌心参考图锁定单颗药片相对手掌的真实尺寸；手掌自然展开，药片不能被手纹吞没或异常放大。',
      '指尖横向夹持': '药片细节采用指尖横向夹持，以横向夹持参考图锁定药片厚度、圆角和受力关系；仅出现自然手指，不增加药片。',
      '指尖竖向夹持': '药片细节采用指尖竖向夹持，以竖向夹持参考图锁定药片长度、圆角和受力关系；仅出现自然手指，不增加药片。',
      '瓶盖': '药片细节放在一个真实比例的干净瓶盖中；瓶盖仅作生活化容器，不出现药瓶或额外品牌。',
      '勺': '药片细节放在一只真实比例的生活用勺中，药片与勺面接触自然，不悬浮、不增加药片。',
      '杯／碗／盘': '药片细节放在用户所选的杯、碗或盘类容器中，容器尺寸与药片比例真实，画面只出现一颗药片。',
      '托盘': '药片细节放在用户所选的小型托盘中，药片与托盘比例真实，不得生成医疗器械感或额外药品。'
    };
    return rules[tabletSupport] || '';
  }

  function subjectRule(combo, referenceHasHand, blisterState = '完整药板') {
    const usedBlister = blisterState === '正在服用（有空泡罩）';
    const blisterIdentity = usedBlister ? '一板正在服用、仅1至3颗已取出的药板' : '一板完整药板';
    if (combo === '包装盒＋药板' && referenceHasHand) return `画面主体严格保持产品参考图中的一个包装盒与${blisterIdentity}。包装盒必须由参考图中的手指或手掌自然、真实地持握支撑，或按参考图姿态真实接触硬质桌面；禁止盒底留白、漂浮、脱离手部悬空或虚构桌面接触。药板必须泡罩面朝上或朝向镜头，并由可见手指、手掌真实托住；如果没有手部直接支撑，则必须完全平放在硬质桌面，形成连续贴近的接触阴影。禁止药板无支撑独立直立、漂浮在包装盒旁边、悬空或仅依靠虚构阴影。不得增加任何未选择的产品形态。`;
    if (combo === '包装盒' && referenceHasHand) return '画面主体严格保持产品参考图中的一个包装盒。包装盒必须由参考图中的手指和手掌自然、真实地持握支撑，指尖遮挡、受力关系与握持角度符合现实；禁止盒底留白、漂浮、脱离手部悬空或虚构桌面接触，不强制包装盒落在桌面。不得增加任何未选择的产品形态。';
    if (combo === '药板' && referenceHasHand) return `画面主体严格保持产品参考图中的${blisterIdentity}。药板必须泡罩面朝上或朝向镜头，并由参考图中的手指、手掌自然持握或托住，指尖接触、受力和薄板姿态符合现实；禁止药板无支撑独立直立、悬空或脱离手部，不强制药板落在桌面。不得增加任何未选择的产品形态。`;
    if (combo === '包装盒＋药板' && usedBlister) return `画面主体严格保持产品参考图中的一个包装盒与${blisterIdentity}，二者各自完整、边界清楚且稳定置于同一硬质桌面。药板必须泡罩面朝上平放或以轻微斜角稳定承托，并形成连续贴近的接触阴影；禁止药板独立直立、倚靠包装盒或悬空。包装盒必须以真实接触面落在桌面，接触边缘清楚且有自然阴影；禁止盒底留白、漂浮或悬空。不得增加任何未选择的产品形态。`;
    if (combo === '药板' && usedBlister) return `画面主体严格保持产品参考图中的${blisterIdentity}。药板必须泡罩面朝上完全平放或以轻微斜角稳定承托在硬质桌面，边缘和底面形成连续贴近的接触阴影；禁止独立直立、倚靠其他物体或悬空。不得增加任何未选择的产品形态。`;
    return comboSubjects[combo];
  }

  studio.prompt.rules = { cameraTone, productColorMaster, environment, reverseEnvironment, noArtwork, bed, identity, comboSubjects, subjectRule, useStateRule, tabletSupportRule };
})(globalThis.BayerStudio);


(function registerPromptValidator(studio) {
  'use strict';

  const requiredChecks = [
    ['camera-tone', 'iPhone 17 Pro Max原相机后置镜头风格', '缺少原相机色调锁定'],
    ['white-balance-5000k', '5000K中性日光白平衡', '缺少5000K中性日光白平衡锁定'],
    ['no-yellow', '禁止复古报纸黄', '缺少禁止黄偏规则'],
    ['single-product-reference', '仅使用这一张产品参考图', '缺少单产品参考图锁定'],
    ['identity', '产品参考图是唯一产品外观依据', '缺少产品一致性规则'],
    ['color-master', '套图产品色彩与身份契约', '缺少45°产品颜色母版锁定'],
    ['reverse-scene', '同生活语境、同摄影语言但非复制品的倒推式重建', '缺少参考场景倒推分析'],
    ['similarity-scale', '约70%视觉基因保留、约30%画面重构', '缺少场景相似尺度'],
    ['scene-originality', '禁止直接复制参考图', '缺少禁止直接复制参考场景规则'],
    ['no-artwork', '禁止额外标题、花字', '缺少禁止花字和叠加文字规则'],
    ['ratio', '图片比例为', '缺少图片比例']
  ];

  function validatePrompt(prompt, context) {
    const issues = requiredChecks
      .filter(([code]) => !context.setInner || !['reverse-scene', 'similarity-scale', 'scene-originality'].includes(code))
      .filter(([, phrase]) => !prompt.includes(phrase))
      .map(([code, , message]) => ({ code, message }));

    if (context.setInner) {
      const setChecks = [
        ['set-zero-change', '套图正式镜头环境零变化规则', '缺少套图背景零变化规则'],
        ['set-anchor', '所有镜头共用同一张无产品环境母版', '缺少套图统一环境母版锁定'],
        ['set-no-rebuild', '禁止重新生成背景', '缺少套图禁止重建背景规则'],
        ['set-framing', '只允许从同一环境母版改变焦距感', '缺少同环境变焦与主体占比规则']
      ];
      setChecks
        .filter(([, phrase]) => !prompt.includes(phrase))
        .forEach(([code, , message]) => issues.push({ code, message }));
    }

    const expectsHand = context.referenceHasHand;
    if (!context.setInner && !prompt.includes('画面只出现居家环境') && !prompt.includes('简单居家环境')) {
      issues.push({ code: 'home-only', message: '缺少居家环境锁定' });
    }
    if (expectsHand && !prompt.includes('自然的手或手臂')) {
      issues.push({ code: 'hand-required', message: '手持参考缺少手部要求' });
    }
    if (!expectsHand && !prompt.includes('不出现手、手臂或人物')) {
      issues.push({ code: 'hand-forbidden', message: '静置参考缺少无手规则' });
    }
    if (!prompt.includes(studio.prompt.rules.subjectRule(context.combo, expectsHand, context.blisterState))) {
      issues.push({ code: 'product-form', message: '缺少所选产品形态锁定' });
    }
    if (context.combo.includes('包装盒') && !prompt.includes('禁止盒底留白、漂浮')) {
      issues.push({ code: 'box-contact', message: '包装盒缺少桌面接触与防悬浮规则' });
    }
    if (context.combo.includes('药板') && !prompt.includes('药板必须泡罩面朝上')) {
      issues.push({ code: 'blister-flat', message: '药板缺少泡罩面朝上平放规则' });
    }
    if (context.combo.includes('药板') && context.blisterState === '正在服用（有空泡罩）') {
      for (const [code, phrase, message] of [
        ['used-blister-count', '清楚显示1至3颗药片已取出', '缺少已取出药片数量限制'],
        ['used-blister-cavity', '泡罩正反面的物理结构正确为最高优先级', '缺少泡罩正反面物理规则'],
        ['used-blister-front', '禁止把银色铝箔破口贴在透明泡罩正面', '缺少正面破口防错规则'],
        ['used-blister-tablets', '其余泡罩仍保留粉色药片', '缺少其余粉色药片规则']
      ]) if (!prompt.includes(phrase)) issues.push({ code, message });
    }
    return { valid: issues.length === 0, issues };
  }

  function validateUniversalPrompt(prompt, context = {}) {
    const checks = [
      ['unique-product', '唯一产品外观依据', '缺少唯一产品外观依据'],
      ['visible-only', '不得推测', '缺少禁止推测未展示结构规则'],
      ['scale', '真实相对比例依据', '缺少产品比例与场景尺度规则'],
      ['support', '接触阴影', '缺少真实承托与接触阴影规则'],
      ['integration', '环境反射', '缺少光线和环境融合规则'],
      ['no-overlay', '禁止抠图感', '缺少防抠图感规则'],
      ['no-artwork', '不添加标题、花字、水印', '缺少禁止叠加文字规则'],
      ['ratio', '图片比例为', '缺少图片比例']
    ];
    const issues = checks.filter(([, phrase]) => !prompt.includes(phrase)).map(([code, , message]) => ({ code, message }));
    if (context.backgroundMode === 'exact' && !prompt.includes('严格复刻参考图背景')) issues.push({ code: 'exact-background', message: '缺少严格复刻背景规则' });
    if (context.backgroundMode !== 'exact' && (!prompt.includes('约70%视觉基因保留') || !prompt.includes('约30%画面重构'))) issues.push({ code: 'background-70-30', message: '缺少70/30背景规则' });
    if (context.isDiaper && (!prompt.includes('只生成一片白片纸尿裤') || !prompt.includes('柔软无纺布'))) issues.push({ code: 'diaper-material', message: '缺少白片数量与柔软材质规则' });
    return { valid: issues.length === 0, issues };
  }

  function validateResultPrompt(result) {
    if (result?.custom) {
      const genericProductSet = Boolean(
        result.structuredPlan?.genericProductSet
        || result.setContext?.genericProductSet
        || result.config?.setContext?.genericProductSet
        || result.mode === 'set'
      );
      return validateUniversalPrompt(result.text, {
        backgroundMode: result.structuredPlan?.backgroundMode,
        isDiaper: !genericProductSet && /纸尿裤|白片/.test(`${result.config?.combo || ''} ${result.productReference?.label || ''}`)
      });
    }
    return validatePrompt(result.text, {
      combo: result.config.combo,
      referenceHasHand: studio.prompt.referenceHasHand(result.item),
      setInner: result.setContext?.phase === 'shot',
      blisterState: result.config.blisterState
    });
  }

  studio.prompt.validatePrompt = validatePrompt;
  studio.prompt.validateUniversalPrompt = validateUniversalPrompt;
  studio.prompt.validateResultPrompt = validateResultPrompt;
})(globalThis.BayerStudio);


(function registerPromptEngine(studio) {
  'use strict';

  function referenceHasHand(item) {
    if (item.format === '手持') return true;
    if (item.format !== '细节展示') return false;
    return (item.detailTags || []).includes('手持') || item.shot === '手持' || /掌心|手掌|指尖|手持/.test(item.title || '');
  }

  function shouldReverseReference(item) {
    return Boolean(item);
  }

  function handRule(item, variation, setContext = null) {
    if (!referenceHasHand(item)) return '静置构图，画面不出现手、手臂或人物。';
    const manicureLock = setContext?.manicureStyle
      ? `同一套图手部身份锁：所有手持镜头必须保持同一人的肤色、手型、手指粗细和美甲；本套固定美甲为“${setContext.manicureStyle}”。产品参考图中的其他美甲只用于理解持握关系，不得覆盖本套固定美甲。`
      : '';
    const action = item.format === '细节展示'
      ? `参考原图的掌心或指尖展示方式，${variation.hand}`
      : `${variation.hand}，以放松且符合现实的姿势持握产品`;
    const originality = shouldReverseReference(item)
      ? '借鉴场景参考图的手持展示方式、拍摄距离和生活感，但调整手指弯曲、手腕角度、入画位置或持握姿态，形成清晰可见的新动作；不逐像素复制原手势。'
      : '';
    return `画面出现自然的手或手臂。${originality}${action}，不新增手指，不遮挡时光片品牌与关键结构。手与产品必须是明显主体，手指、指甲、关节、皮肤纹理与产品边缘清晰对焦，手腕从画面边缘自然连续入画，不得模糊、融化、断裂或成为背景陪衬。指尖与产品有真实受力、遮挡和贴近的自然阴影。${manicureLock}`;
  }

  function shotFramingRule(combo, presentation, variantIndex) {
    const plans = [
      ['中近景', '主体组合占画面约35%至50%', '保留适量生活环境与真实桌面接触'],
      ['近景', '主体组合占画面约40%至55%', '通过焦距和裁切接近主体，不移动环境物件'],
      ['中景', '主体组合占画面约30%至45%', '稍微保留更多环境，但禁止出现大面积无信息空白'],
      ['细节近景', '主体组合占画面约45%至60%', '对主体确定性裁切，保留背景中可识别的同一环境锚点']
    ];
    let [scale, coverage, crop] = plans[variantIndex % plans.length];
    if (combo === '药板') coverage = '药板占画面约25%至40%';
    if (combo === '药片' || combo === '药片细节') coverage = '药片与手部或承托面组合占画面约40%至60%';
    if (presentation === '手持') crop += '；手与产品共同构成前景主体';
    return `本镜头景别为“${scale}”，${coverage}。${crop}。只允许从同一环境母版改变焦距感、画幅裁切和轻微平移；不得改变环境物件的身份、款式、颜色、数量或相互关系，不得重新生成大角度机位。`;
  }

  function orientationRule(productReference, hasHand) {
    const angleText = productReference.angle ? `“${productReference.angle.label}”（${productReference.angle.reason}）` : `“${productReference.label}”`;
    if (productReference.kind === 'blister') {
      if (hasHand) return `仅使用这一张产品参考图，并只从${angleText}锁定药板外观、轮廓、结构、颜色和比例。白底正视图不是独立直立姿态依据；进入场景后药板由参考图中的手指或手掌真实支撑，保持自然持握视角，不得无支撑直立、悬空、三维重建、拉宽、压扁或虚构不可见表面。`;
      return `仅使用这一张产品参考图，并只从${angleText}锁定药板外观、轮廓、结构、颜色和比例。白底正视图不是直立姿态依据；进入场景后必须按物理规则将药板泡罩面朝上平放在桌面。若场景机位冲突，调整场景机位；不得把药板旋转成直立或斜立状态，不得三维重建、拉宽、压扁或虚构不可见表面。`;
    }
    const support = hasHand && productReference.kind === 'box'
      ? '真实手部持握与手指接触，不强制桌面承托'
      : hasHand && productReference.kind === 'box-blister'
        ? '包装盒与药板各自由可见手部支撑，或分别真实接触硬质桌面；任何单独产品都不得悬空'
        : '真实桌面接触';
    const physicalPose = productReference.angle ? `产品图已按原场景的真实摆放姿态自动匹配为“${productReference.angle.pose}”，以“${productReference.angle.supportFace}”承托，可见“${productReference.angle.visibleFaces}”` : '';
    return `仅使用这一张产品参考图，产品必须保持其中的${angleText}、朝向、轮廓、透视、可见表面和比例。${physicalPose}。画面中的纵向或横向排列只表示图像平面方向，产品在三维空间中的承托关系必须服从${support}。若没有完全一致的实拍图，使用系统自动选出的物理姿态最接近图，不要求用户手动选择；不得旋转推演、三维重建、拉宽、压扁或虚构不可见表面。`;
  }

  function selectedPropRule(selectedProps, setInner = false) {
    if (setInner) return '套图正式镜头环境道具零变化：无产品干净环境母版中已经出现的全部家具、照片、海报、收纳、香水瓶、蜡烛、托盘与生活物件必须保持同一身份、款式、文字、图案、材质、颜色、数量和空间关系；不得新增、删除、搬动、替换或重新设计任何环境道具。因本镜头指定变焦、裁切或轻微平移而产生的画布坐标变化是唯一例外，但透视和元素间关系必须合理一致。';
    if (!selectedProps.length) return '道具候选池为空：保留场景参考中已经存在且可识别的家具、墙面、承托面和普通生活物件类别及大致数量，禁止新增参考图中不存在的可移动物件类别、品牌物品或用途不明物体。';
    const required = Math.min(2, selectedProps.length);
    return `道具候选池契约（高优先级）：候选仅限${selectedProps.map(prop => prop.label).join('、')}。AI必须根据场景与物理关系从不同候选图中自动选择${required}组适合的道具，无需让全部候选出现，但实际采用数量不得少于${required}组。场景参考中原本已经存在且可识别的普通生活物件属于环境基线，必须保留其类别、数量级、疏密和空间作用；候选池用于替换或补充其中适配位置，禁止新增“环境基线或候选池”之外的物件类别与用途不明物体。采用的道具应形成2至3个有生活逻辑的小组合，例如收纳物与梳妆用品相邻、瓶罐与托盘相邻，而不是把一个道具孤立放成广告主体。道具及原有生活物件共同维持参考图的信息密度，产品预留区约占25%至35%，不得清空大半桌面。候选道具组合占画面不超过约30%，单件不超过约15%；位于侧边、前后景或真实使用区域。禁止单件居中、孤立直立、正面广告式展示、标签刻意朝向镜头，禁止让道具成为最大或最清晰主体。所选白底道具图是外观身份库，不是构图模板；凡实际采用的物件，必须还原其可辨识的款式、颜色、材质、比例和设计，不得用同类替代品或其他品牌替换。禁止复制白底图中的排列，必须按真实用途稳定摆放并形成自然接触阴影：气垫、粉饼和眼影盘以稳定底面平放或自然打开；软管盖子朝下稳定放置或横放；香水、乳液瓶和罐体以底面直立；口红、刷具和笔状物横放或放入合适收纳；任何物件不得无支撑站立、悬空或互相穿插。`;
  }

  function productFormFirewall(combo, blisterState = '完整药板') {
    const blisterIdentity = blisterState === '正在服用（有空泡罩）' ? '正在服用且仅1至3颗已取出的药板' : '完整药板';
    const allowed = {
      '包装盒＋药板': `只允许一个包装盒和一板${blisterIdentity}`,
      '包装盒': '只允许一个包装盒；禁止药板、散装药片、胶囊、药瓶及任何盛放它们的碟子、托盘或专用容器',
      '药板': `只允许一板${blisterIdentity}；禁止包装盒、散装药片、胶囊、药瓶及任何盛放它们的专用容器`,
      '药片': '只允许一颗药片；禁止包装盒、药板、药瓶和额外药片',
      '药片细节': '只允许一颗药片；禁止包装盒、药板、药瓶和额外药片；只有用户明确选择的承托容器可以出现'
    };
    return `产品形态防串线规则（优先级高于场景指纹）：${allowed[combo]}。场景参考图里原产品及其附属物仅用于识别原主体位置与占比，必须从新画面中彻底移除；不得把参考图中的药片、胶囊、药板、原品牌包装、瓶盖、药碟或专用托盘当作环境道具保留。若Gemini场景描述与本规则冲突，忽略冲突内容。`;
  }

  function generatePrompt(input) {
    const { item, variantIndex, combo, ratio, selectedProps = [], sceneFingerprint = null, presentation = item.format, visualStyle = item.style, tabletSupport = '', blisterState = '完整药板', setContext = null, qualityMemory = '' } = input;
    const variation = studio.prompt.planVariation(item, variantIndex);
    const productReference = studio.prompt.productReference(item, variation, variantIndex, combo, sceneFingerprint, { tabletSupport, blisterState });
    const hasHand = referenceHasHand(item);
    const reverseReference = shouldReverseReference(item);
    const setInner = setContext?.phase === 'shot';
    const fingerprintGuide = sceneFingerprint ? studio.services.sceneAnalysis?.promptGuide(sceneFingerprint) : '';
    const sections = [
      setInner
        ? '套图正式镜头环境零变化规则（最高优先级）：第一张输入图是本套已经生成的无产品干净环境母版，不是需要重新设计的场景参考图。禁止执行任何环境变化比例或倒推重建背景，禁止增删、替换、改色或重新设计任何可见背景细节。只生成当前产品、必要手部、真实接触阴影与环境反射；母版中没有任何旧产品需要保留。'
        : '先在内部核对第一张场景参考图及其场景指纹，不输出分析过程，再进行同生活语境、同摄影语言但非复制品的倒推式重建。执行约70%视觉基因保留、约30%画面重构；允许改变景别、相机距离、裁切、主体位置与局部布局，至少产生三处明显差异，禁止只在原图上替换产品。',
      setInner ? '' : (fingerprintGuide ? `Gemini场景指纹（优先执行）：${fingerprintGuide}` : '场景指纹暂缺：直接从第一张场景参考图识别场景用途、色调、光线、材质气质、生活感、空间层次、景深和画面疏密；这些作为70%视觉基因，不锁死景别、相机距离、裁切和主体位置。'),
      setInner ? '' : (reverseReference ? studio.prompt.rules.reverseEnvironment : studio.prompt.rules.environment),
      `本镜头展示方式为“${presentation || '静置'}”，视觉风格为“${visualStyle || '精致随手PO'}”。展示方式控制产品与手部/承托面的物理关系，视觉风格只控制生活化程度、构图精致度和拍摄质感，二者不得混淆。`,
      setContext ? `套图一致性锁：本镜头属于同一套图的第${setContext.index + 1}/${setContext.total}张，所有镜头共用同一张无产品环境母版。家具、海报、照片、摆件、桌面、墙面、材质、颜色、光线方向和数量必须保持同一环境身份。允许通过焦距感、景别、画幅裁切和轻微平移让主体更突出，但禁止重新生成背景、更换或移动环境元素。` : '',
      setContext?.packagingTotal > 1 && /包装盒/.test(combo) ? `包装镜头差异化编排：这是本套第${setContext.packagingOrdinal + 1}/${setContext.packagingTotal}个含外包装盒的镜头。它必须使用当前所附的独立真实产品姿态参考，并与本套其他包装镜头形成明显不同的产品朝向、可见面和景别；禁止只做轻微位移、近似重复角度或相同主体大小。差异只作用于产品和画幅裁切，背景元素身份、数量、颜色、光线和空间关系仍须完全一致。` : '',
      setInner ? shotFramingRule(combo, presentation, variantIndex) : '',
      studio.prompt.rules.productColorMaster,
      productFormFirewall(combo, blisterState),
      studio.prompt.rules.subjectRule(combo, hasHand, blisterState),
      handRule(item, variation, setContext),
      orientationRule(productReference, hasHand),
      studio.prompt.rules.identity[combo],
      studio.prompt.rules.useStateRule(combo, blisterState),
      combo === '药片细节' ? studio.prompt.rules.tabletSupportRule(tabletSupport) : '',
      studio.prompt.rules.bed,
      selectedPropRule(selectedProps, setInner),
      studio.prompt.rules.noArtwork,
      studio.prompt.rules.cameraTone,
      qualityMemory ? `历史评审质量记忆（只作为纠错偏好，不得覆盖产品身份和本轮人工选择${setInner ? '；其中任何要求改变背景、家具、摆件、光线或构图的内容一律忽略' : ''}）：${qualityMemory}` : '',
      setInner
        ? `本镜头与无产品环境母版之间只允许新增当前产品、必要手势、产品接触阴影和环境反射；海报、照片、置物架、瓶罐、蜡烛、托盘、桌面纹理和墙面必须保持同一元素身份与空间关系，只随本镜头指定的变焦、裁切或轻微平移合理改变画布坐标。产品与桌面或手部必须形成连续真实的遮挡、接触阴影、反射与景深关系，禁止透明叠加、双重曝光、贴图边缘和旧产品残影。图片比例为${ratio}。`
        : `同批方案保持统一摄影语言、生活语境与所选产品真实角度；每张都可以改变景别、相机距离、适度机位高度、裁切、主体位置和局部布局，至少产生三处清晰差异。产品必须是第一视觉落点和最清晰区域，主体组合约占画面28%至45%，环境不得抢主体。图片比例为${ratio}。`
    ].filter(Boolean);
    const prompt = sections.join('\n');
    const context = { combo, referenceHasHand: hasHand, setInner, blisterState };
    return {
      prompt,
      variation,
      productReference,
      presentation,
      visualStyle,
      tabletSupport,
      blisterState,
      setContext,
      validation: studio.prompt.validatePrompt(prompt, context)
    };
  }

  studio.prompt.referenceHasHand = referenceHasHand;
  studio.prompt.shouldReverseReference = shouldReverseReference;
  studio.prompt.generatePrompt = generatePrompt;
})(globalThis.BayerStudio);


(function registerLibraryFeature(studio) {
  'use strict';
  const editKey = 'bayer-material-classification-edits-v3';
  const singleAxes = [
    ['style', '质感', studio.data.classification.styles],
    ['scene', '风格', studio.data.classification.scenes],
    ['format', '内容', studio.data.classification.formats],
    ['cameraAngle', '拍摄机位', studio.data.classification.cameraAngles],
    ['subjectOrientation', '主体朝向', studio.data.classification.subjectOrientations]
  ];

  function initialize() {
    const saved = studio.services.storage.read(editKey, {});
    const correctionKey = 'bayer-material-classification-correction-20260825-v1';
    if (!studio.services.storage.read(correctionKey, false)) {
      for (const id of ['XHS59', 'XHS70']) {
        if (saved[id]) saved[id].cameraAngle = '高位俯拍';
      }
      for (const [id, requiredTags] of [['XHS41', ['手持', '带产品包装', '带容器']], ['XHS42', ['带容器']]]) {
        if (saved[id]) saved[id].detailTags = [...new Set([...(saved[id].detailTags || []), ...requiredTags])];
      }
      studio.services.storage.write(editKey, saved);
      studio.services.storage.write(correctionKey, true);
    }
    studio.state.materialDefaults = new Map(studio.data.materials.map(item => [item.id, structuredClone(item)]));
    studio.state.materials = studio.data.materials.map(item => {
      const current = { ...item, ...(saved[item.id] || {}) };
      current.shot = current.format === '手持' || (current.detailTags || []).includes('手持') ? '手持' : '静置';
      return current;
    });
    studio.state.props = (studio.data.props || []).map(item => ({ ...item, ...(saved[item.id] || {}) }));
    studio.state.libraryFilters = { materialType: '场景参考', propCategory: '全部', style: '全部', scene: '全部', format: '全部', cameraAngle: '全部', subjectOrientation: '全部', detailTags: new Set(), productForms: new Set() };
    studio.state.libraryEditingId = null;
    studio.state.libraryPage = 0;
  }

  function includesEvery(itemValues, selected) {
    return [...selected].every(value => (itemValues || []).includes(value));
  }

  function visibleMaterials() {
    const filters = studio.state.libraryFilters;
    if (filters.materialType === '道具') return (studio.state.props || []).filter(item =>
      (filters.propCategory === '全部' || item.category === filters.propCategory) &&
      ['cameraAngle', 'subjectOrientation'].every(key => filters[key] === '全部' || item[key] === filters[key]));
    return studio.state.materials.filter(item =>
      ['style', 'scene', 'format', 'cameraAngle', 'subjectOrientation'].every(key => filters[key] === '全部' || item[key] === filters[key]) &&
      (!filters.detailTags.size || (item.format === '细节展示' && includesEvery(item.detailTags, filters.detailTags))) &&
      includesEvery(item.productForms, filters.productForms)
    );
  }

  function filterSelect(key, label, values, selected) {
    return `<label>${label}<select data-library-filter="${key}">${values.map(value => `<option value="${studio.utils.escapeHtml(value)}"${selected === value ? ' selected' : ''}>${studio.utils.escapeHtml(value)}</option>`).join('')}</select></label>`;
  }

  function selectedSetValue(selected) {
    return selected.size ? [...selected][0] : '全部';
  }

  function tagMarkup(item) {
    if (item.materialType === '道具') return [item.category, `机位:${item.cameraAngle}`, `朝向:${item.subjectOrientation}`].map(value => `<span class="tag">${studio.utils.escapeHtml(value)}</span>`).join('');
    return [item.style, item.scene, item.format, ...(item.format === '细节展示' ? item.detailTags : []), ...(item.productForms || []).map(value => `产品:${value}`), `机位:${item.cameraAngle || '平视'}`, `朝向:${item.subjectOrientation || '不限'}`]
      .map(value => `<span class="tag">${studio.utils.escapeHtml(value)}</span>`).join('');
  }

  function editorMarkup(item) {
    const select = (key, label, values) => `<label>${label}<select data-edit-field="${key}">${values.map(value => `<option${item[key] === value ? ' selected' : ''}>${value}</option>`).join('')}</select></label>`;
    const checks = (key, label, values, current) => `<fieldset><legend>${label}（可多选）</legend>${values.map(value => `<label class="check-chip"><input type="checkbox" data-edit-list="${key}" value="${value}" ${(current || []).includes(value) ? 'checked' : ''}>${value}</label>`).join('')}</fieldset>`;
    const prop = item.materialType === '道具';
    const fields = prop ? select('category', '道具分类', studio.data.classification.propCategories) : `${select('style', '质感', studio.data.classification.styles)}${select('scene', '风格', studio.data.classification.scenes)}${select('format', '内容', studio.data.classification.formats)}`;
    return `<div class="classification-editor" data-editor="${item.id}"><h3>编辑 ${item.id} 分类</h3><div class="editor-fields">${fields}${select('cameraAngle', '拍摄机位', studio.data.classification.cameraAngles)}${select('subjectOrientation', '主体朝向', studio.data.classification.subjectOrientations)}</div>${prop ? '' : `${checks('detailTags', '细节展示细分', studio.data.classification.detailTags, item.detailTags)}${checks('productForms', '产品组合', studio.data.classification.productForms, item.productForms)}`}<p class="editor-note">人工分类保存后同步影响提示词选材及产品角度匹配。</p><div class="actions"><button class="action" data-cancel-edit>取消</button>${prop ? '' : '<button class="action" data-reset-item>恢复初始分类</button>'}<button class="action primary" data-save-edit>保存分类</button></div></div>`;
  }

  function persistItem(item) {
    const saved = studio.services.storage.read(editKey, {});
    saved[item.id] = item.materialType === '道具' ? { category: item.category, cameraAngle: item.cameraAngle, subjectOrientation: item.subjectOrientation } : { style: item.style, scene: item.scene, format: item.format, shot: item.shot, detailTags: item.detailTags, productForms: item.productForms, cameraAngle: item.cameraAngle, subjectOrientation: item.subjectOrientation };
    studio.services.storage.write(editKey, saved);
  }

  function buildClassificationExport() {
    const materials = studio.state.materials;
    const props = studio.state.props || [];
    return {
      schema: props.length ? 'bayer-material-classification-v3' : 'bayer-material-classification-v2',
      exportedAt: new Date().toISOString(),
      total: materials.length + props.length,
      sceneTotal: materials.length,
      propTotal: props.length,
      active: materials.filter(item => !item.deleted).length,
      deleted: materials.filter(item => item.deleted).length,
      edited: Object.keys(studio.services.storage.read(editKey, {})).length,
      items: [...materials.map(item => ({
        id: item.id,
        title: item.title,
        materialType: '场景参考',
        style: item.style,
        scene: item.scene,
        format: item.format,
        shot: item.shot,
        detailTags: [...(item.detailTags || [])],
        productForms: [...(item.productForms || [])],
        cameraAngle: item.cameraAngle || '平视',
        subjectOrientation: item.subjectOrientation || '不限',
        deleted: Boolean(item.deleted),
        image: item.image,
        sourceUrl: item.sourceUrl || ''
      })), ...props.map(item => ({ id: item.id, title: item.label, label: item.label, materialType: '道具', category: item.category, cameraAngle: item.cameraAngle, subjectOrientation: item.subjectOrientation, image: item.image }))]
    };
  }

  function downloadClassification() {
    const payload = buildClassificationExport();
    const date = new Date();
    const stamp = [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
    const time = [date.getHours(), date.getMinutes(), date.getSeconds()].map(value => String(value).padStart(2, '0')).join('');
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `拜耳时光片素材分类_${stamp}_${time}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return payload;
  }

  function importClassificationPayload(payload) {
    const rows = Array.isArray(payload) ? payload : payload && (payload.items || payload.materials);
    if (!Array.isArray(rows)) throw new Error('分类文件格式不正确：未找到 items 素材列表');
    const knownStyles = new Set(studio.data.classification.styles);
    const knownScenes = new Set(studio.data.classification.scenes);
    const knownFormats = new Set(studio.data.classification.formats);
    const knownDetails = new Set(studio.data.classification.detailTags);
    const knownProducts = new Set(studio.data.classification.productForms);
    const byId = new Map([...studio.state.materials, ...(studio.state.props || [])].map(item => [item.id, item]));
    const saved = studio.services.storage.read(editKey, {});
    let imported = 0;
    let skipped = 0;

    for (const row of rows) {
      const item = row && byId.get(row.id);
      if (!item) { skipped += 1; continue; }
      if (item.materialType === '道具') {
        if ((studio.data.classification.propCategories || []).includes(row.category)) item.category = row.category;
        if ((studio.data.classification.cameraAngles || []).includes(row.cameraAngle)) item.cameraAngle = row.cameraAngle;
        if ((studio.data.classification.subjectOrientations || []).includes(row.subjectOrientation)) item.subjectOrientation = row.subjectOrientation;
        saved[item.id] = { category: item.category, cameraAngle: item.cameraAngle, subjectOrientation: item.subjectOrientation };
        imported += 1;
        continue;
      }
      if (knownStyles.has(row.style)) item.style = row.style;
      if (knownScenes.has(row.scene)) item.scene = row.scene;
      if (knownFormats.has(row.format)) item.format = row.format;
      if ((studio.data.classification.cameraAngles || []).includes(row.cameraAngle)) item.cameraAngle = row.cameraAngle;
      if ((studio.data.classification.subjectOrientations || []).includes(row.subjectOrientation)) item.subjectOrientation = row.subjectOrientation;
      if (Array.isArray(row.detailTags)) item.detailTags = [...new Set(row.detailTags.filter(value => knownDetails.has(value)))];
      if (Array.isArray(row.productForms)) {
        const validForms = [...new Set(row.productForms.filter(value => knownProducts.has(value)))];
        if (validForms.length) item.productForms = validForms;
      }
      if (item.format !== '细节展示') item.detailTags = [];
      item.shot = item.format === '手持' || item.detailTags.includes('手持') ? '手持' : '静置';
      saved[item.id] = { style: item.style, scene: item.scene, format: item.format, shot: item.shot, detailTags: item.detailTags, productForms: item.productForms, cameraAngle: item.cameraAngle, subjectOrientation: item.subjectOrientation };
      imported += 1;
    }

    if (!imported) throw new Error('分类文件中没有匹配当前素材库的素材编号');
    studio.services.storage.write(editKey, saved);
    return { imported, skipped };
  }

  function render(container) {
    const filters = studio.state.libraryFilters;
    const materials = studio.state.materials;
    const visible = visibleMaterials();
    const pageSize = 12;
    const pageCount = Math.max(1, Math.ceil(visible.length / pageSize));
    studio.state.libraryPage = Math.min(Math.max(0, studio.state.libraryPage || 0), pageCount - 1);
    const pageStart = studio.state.libraryPage * pageSize;
    const pageItems = visible.slice(pageStart, pageStart + pageSize);
    const rangeStart = visible.length ? pageStart + 1 : 0;
    const rangeEnd = pageStart + pageItems.length;
    const props = studio.state.props || [];
    const showingProps = filters.materialType === '道具';
    const activeTotal = showingProps ? props.length : materials.length;
    container.innerHTML = `
      <header class="page-head"><div class="eyebrow">REFERENCE LIBRARY</div><h1>参考图库</h1><p class="subtitle">场景 ${materials.length} 张 · 道具 ${props.length} 张</p></header>
      <section class="library-filter-panel"><div class="library-filter-grid">
        ${filterSelect('materialType', '素材类型', studio.data.classification.materialTypes, filters.materialType)}
        ${showingProps
          ? `${filterSelect('propCategory', '道具分类', ['全部', ...studio.data.classification.propCategories], filters.propCategory)}${singleAxes.filter(([key]) => ['cameraAngle', 'subjectOrientation'].includes(key)).map(([key, label, values]) => filterSelect(key, label, ['全部', ...values], filters[key])).join('')}`
          : `${singleAxes.map(([key, label, values]) => filterSelect(key, label, ['全部', ...values], filters[key])).join('')}${filterSelect('productForms', '产品组合', ['全部', ...studio.data.classification.productForms], selectedSetValue(filters.productForms))}${filters.format === '细节展示' ? filterSelect('detailTags', '细节展示', ['全部', ...studio.data.classification.detailTags], selectedSetValue(filters.detailTags)) : ''}`}
      </div></section>
      <div class="toolbar"><span class="count">第 ${rangeStart}–${rangeEnd} 张 / 共 ${visible.length} 张</span><div class="actions"><button class="action primary" id="exportClassifications">导出当前分类</button><button class="action" id="importClassifications">导入分类</button><input id="classificationFile" type="file" accept=".json,application/json" hidden><button class="action" id="resetAllClassifications">恢复全部初始分类</button></div></div>
      <section class="grid">${pageItems.map(item => `
        <article class="card" data-material="${item.id}"><img src="${encodeURI(item.image)}" alt="${studio.utils.escapeHtml(item.title)}" loading="lazy"><div class="card-body"><span class="code">${item.id}</span><h2>${studio.utils.escapeHtml(item.title)}</h2><div class="tags">${tagMarkup(item)}</div><div class="actions"><button class="action" data-edit-material="${item.id}">编辑分类</button>${item.sourceUrl ? `<a class="source-link" href="${studio.utils.escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener noreferrer">查看原始来源</a>` : ''}</div></div>${studio.state.libraryEditingId === item.id ? editorMarkup(item) : ''}</article>`).join('')}</section>
      <div class="pagination"><button class="action" data-library-page="prev" ${studio.state.libraryPage === 0 ? 'disabled' : ''}>上一页</button><span>${studio.state.libraryPage + 1} / ${pageCount}</span><button class="action" data-library-page="next" ${studio.state.libraryPage + 1 >= pageCount ? 'disabled' : ''}>下一页</button></div>`;

    container.querySelectorAll('[data-library-filter]').forEach(select => select.onchange = () => {
      const key = select.dataset.libraryFilter;
      if (key === 'productForms' || key === 'detailTags') {
        filters[key].clear();
        if (select.value !== '全部') filters[key].add(select.value);
      } else {
        filters[key] = select.value;
      }
      if (key === 'format' && select.value !== '细节展示') filters.detailTags.clear();
      studio.state.libraryPage = 0;
      render(container);
    });
    container.querySelectorAll('[data-library-page]').forEach(button => button.onclick = () => {
      studio.state.libraryPage += button.dataset.libraryPage === 'next' ? 1 : -1;
      render(container);
    });
    container.querySelectorAll('[data-edit-material]').forEach(button => button.onclick = () => { studio.state.libraryEditingId = button.dataset.editMaterial; render(container); });
    container.querySelectorAll('[data-cancel-edit]').forEach(button => button.onclick = () => { studio.state.libraryEditingId = null; render(container); });
    container.querySelectorAll('[data-save-edit]').forEach(button => button.onclick = () => {
      const editor = button.closest('[data-editor]');
      const item = [...materials, ...props].find(candidate => candidate.id === editor.dataset.editor);
      editor.querySelectorAll('[data-edit-field]').forEach(field => { item[field.dataset.editField] = field.value; });
      if (item.materialType !== '道具') {
        item.detailTags = [...editor.querySelectorAll('[data-edit-list="detailTags"]:checked')].map(input => input.value);
        item.productForms = [...editor.querySelectorAll('[data-edit-list="productForms"]:checked')].map(input => input.value);
        if (!item.productForms.length) return alert('产品组合至少选择一项');
        if (item.format !== '细节展示') item.detailTags = [];
        item.shot = item.format === '手持' || item.detailTags.includes('手持') ? '手持' : '静置';
      }
      persistItem(item);
      studio.state.libraryEditingId = null;
      render(container);
    });
    container.querySelectorAll('[data-reset-item]').forEach(button => button.onclick = () => {
      const editor = button.closest('[data-editor]');
      const index = materials.findIndex(item => item.id === editor.dataset.editor);
      materials[index] = structuredClone(studio.state.materialDefaults.get(editor.dataset.editor));
      const saved = studio.services.storage.read(editKey, {}); delete saved[editor.dataset.editor]; studio.services.storage.write(editKey, saved);
      studio.state.libraryEditingId = null; render(container);
    });
    container.querySelector('#exportClassifications').onclick = () => downloadClassification();
    const fileInput = container.querySelector('#classificationFile');
    container.querySelector('#importClassifications').onclick = () => fileInput.click();
    fileInput.onchange = async event => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      try {
        const result = importClassificationPayload(JSON.parse(await file.text()));
        studio.state.libraryEditingId = null;
        render(container);
        alert(`已导入 ${result.imported} 张素材分类${result.skipped ? `，跳过 ${result.skipped} 张当前素材库中不存在的素材` : ''}。`);
      } catch (error) {
        alert(`导入失败：${error.message}`);
      }
    };
    container.querySelector('#resetAllClassifications').onclick = () => {
      if (!confirm('确认恢复全部素材的初始分类？人工保存的分类修改会被清除。')) return;
      studio.services.storage.write(editKey, {});
      studio.state.materials = studio.data.materials.map(item => structuredClone(item));
      studio.state.libraryEditingId = null; render(container);
    };
  }

  studio.features.library = { initialize, render, visibleMaterials, buildClassificationExport, importClassificationPayload };
})(globalThis.BayerStudio);


(function registerModelingFeature(studio) {
  'use strict';
  const editKey = 'bayer-product-model-angle-edits-v1';
  const poseOptions = ['直立', '侧躺', '正面朝上平放'];
  const supportFaceOptions = ['底面', '侧面', '背面', '手部'];
  let editingFile = null;

  function initialize() {
    studio.state.productLibrary = studio.state.productLibrary || { brandId: 'bayer', productId: 'shiguang', skuId: 'bayer-shiguang-default' };
    const saved = studio.services.storage.read(editKey, {});
    const correctionKey = 'bayer-product-model-angle-correction-20260825-v1';
    if (!studio.services.storage.read(correctionKey, false)) {
      const firstCombination = saved['combo-angle-01.png'];
      if (firstCombination && firstCombination.label === '正面偏右、轻微俯拍' && firstCombination.subjectOrientation === '左斜') {
        firstCombination.label = '正面偏左、轻微俯拍';
        studio.services.storage.write(editKey, saved);
      }
      studio.services.storage.write(correctionKey, true);
    }
    [...studio.data.products.angleFiles, ...studio.data.products.comboAngleFiles].forEach(angle => {
      angle.original = { label: angle.label, cameraAngle: angle.cameraAngle, subjectOrientation: angle.subjectOrientation, pose: angle.pose, supportFace: angle.supportFace, visibleFaces: angle.visibleFaces };
      if (saved[angle.file]) Object.assign(angle, saved[angle.file]);
    });
  }

  function payload() {
    const products = studio.data.products;
    return { schema: 'bayer-product-model-angles-v2', exportedAt: new Date().toISOString(), items: [...products.angleFiles, ...products.comboAngleFiles].map(item => ({ file: item.file, label: item.label, cameraAngle: item.cameraAngle, subjectOrientation: item.subjectOrientation, pose: item.pose, supportFace: item.supportFace, visibleFaces: item.visibleFaces })) };
  }

  function download() {
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload(), null, 2)], { type: 'application/json;charset=utf-8' }));
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = '拜耳时光片产品建模角度分类.json'; document.body.append(anchor); anchor.click(); anchor.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function persist(angle) {
    const saved = studio.services.storage.read(editKey, {});
    saved[angle.file] = { label: angle.label, cameraAngle: angle.cameraAngle, subjectOrientation: angle.subjectOrientation, pose: angle.pose, supportFace: angle.supportFace, visibleFaces: angle.visibleFaces };
    studio.services.storage.write(editKey, saved);
  }

  function render(container) {
    const libraryState = studio.state.productLibrary;
    const catalog = studio.data.platformCatalog;
    const brands = catalog.brands;
    const brandProducts = catalog.products.filter(item => item.brandId === libraryState.brandId);
    if (!brandProducts.some(item => item.id === libraryState.productId)) libraryState.productId = brandProducts[0]?.id || '';
    const productSkus = catalog.skus.filter(item => item.productId === libraryState.productId);
    if (!productSkus.some(item => item.id === libraryState.skuId)) libraryState.skuId = productSkus[0]?.id || '';
    const selectedSku = studio.data.catalogHelpers.sku(libraryState.skuId);
    const products = studio.data.products;
    const angles = products.angleFiles.map(angle => ({ image: products.root + angle.file, ...angle }));
    const comboAngles = products.comboAngleFiles.map(angle => ({ image: products.root + angle.file, ...angle }));
    const generationReferences = [products.blister, products.usedBlister, products.tablet, products.tabletPalm, products.tabletHorizontal, products.tabletVertical]
      .map(reference => ({ image: products.root + reference.file, label: reference.label }));
    const editor = item => `<div class="model-angle-editor"><label>角度描述<input data-model-label value="${studio.utils.escapeHtml(item.label)}"></label><label>拍摄机位<select data-model-camera>${studio.data.classification.cameraAngles.map(value => `<option${value === item.cameraAngle ? ' selected' : ''}>${value}</option>`).join('')}</select></label><label>产品朝向<select data-model-orientation>${studio.data.classification.subjectOrientations.map(value => `<option${value === item.subjectOrientation ? ' selected' : ''}>${value}</option>`).join('')}</select></label><label>真实摆放姿态<select data-model-pose>${poseOptions.map(value => `<option${value === item.pose ? ' selected' : ''}>${value}</option>`).join('')}</select></label><label>承托面<select data-model-support>${supportFaceOptions.map(value => `<option${value === item.supportFace ? ' selected' : ''}>${value}</option>`).join('')}</select></label><label>可见包装面<input data-model-faces value="${studio.utils.escapeHtml(item.visibleFaces || '')}" placeholder="例如：正面＋右侧面"></label><div class="actions"><button class="action" data-model-cancel>取消</button><button class="action primary" data-model-save="${item.file}">保存分类</button></div></div>`;
    const cards = (items, editable = true) => items.map(product => `<article class="product-card" data-model-file="${product.file || ''}"><img src="${product.image}" alt="${studio.utils.escapeHtml(product.label)}"><span>${studio.utils.escapeHtml(product.label)}</span>${product.cameraAngle ? `<div class="tags modeling-tags"><span class="tag">类型:${studio.utils.escapeHtml(product.productForm || '产品')}</span><span class="tag">机位:${product.cameraAngle}</span><span class="tag">朝向:${product.subjectOrientation}</span><span class="tag">可见:${studio.utils.escapeHtml(product.visibleFaces || '未标')}</span></div>${editable ? `<div class="model-card-actions"><button class="action" data-model-edit="${product.file}">编辑分类</button></div>${editingFile === product.file ? editor(product) : ''}` : ''}` : ''}</article>`).join('');
    const coverage = selectedSku?.poseCoverage || {};
    const coverageMarkup = Object.entries({ identity: '身份母版', static: '静置姿态', handheld: '手持姿态', scale: '比例参考', combination: '组合参考' })
      .map(([key, label]) => `<span class="coverage-chip ${coverage[key] ? 'ready' : 'missing'}">${coverage[key] ? '✓' : '待补'} ${label}</span>`).join('');
    const selector = `<section class="catalog-selector"><div class="axis"><b>品牌</b>${brands.map(item => `<button class="pill ${item.id === libraryState.brandId ? 'active' : ''}" data-brand-id="${item.id}">${item.name}${item.status !== 'active' ? ' · 接入中' : ''}</button>`).join('')}</div><div class="catalog-fields"><label>产品<select id="catalogProduct">${brandProducts.map(item => `<option value="${item.id}"${item.id === libraryState.productId ? ' selected' : ''}>${item.name}</option>`).join('')}</select></label><label>SKU<select id="catalogSku">${productSkus.map(item => `<option value="${item.id}"${item.id === libraryState.skuId ? ' selected' : ''}>${item.name}</option>`).join('')}</select></label><div><b>档案覆盖</b><div class="coverage-list">${coverageMarkup}</div></div></div></section>`;
    const catalogAssets = Array.isArray(selectedSku?.assets) ? selectedSku.assets : [];
    const assetGroups = catalogAssets.reduce((groups, asset) => {
      const group = asset.productForm || '产品图';
      if (!groups.has(group)) groups.set(group, []);
      groups.get(group).push(asset);
      return groups;
    }, new Map());
    const catalogAssetContent = selectedSku?.status === 'ready' && catalogAssets.length
      ? `<div class="toolbar"><span class="count">${catalogAssets.length} 张产品图</span></div>${selectedSku.manualSelectionRequired ? '<div class="selection-plan blocked"><span>部分角度未覆盖，请手动选择。</span></div>' : ''}${[...assetGroups.entries()].map(([group, items]) => `<h3 class="section-title">${studio.utils.escapeHtml(group)} · ${items.length} 张</h3><section class="product-grid">${cards(items, false)}</section>`).join('')}`
      : '';
    const legacyContent = selectedSku?.id === 'bayer-shiguang-default'
      ? `<div class="toolbar"><span class="count">时光片产品图</span><div class="actions"><button class="action primary" id="exportModelAngles">导出分类</button><button class="action" id="importModelAngles">导入分类</button><input id="modelAngleFile" type="file" accept=".json,application/json" hidden></div></div><h3 class="section-title">包装与比例 · 6 张</h3><section class="product-grid">${cards(products.gallery)}</section><h3 class="section-title">药板与药片 · 6 张</h3><section class="product-grid">${cards(generationReferences)}</section><h3 class="section-title">包装盒 · 12 张</h3><section class="product-grid">${cards(angles)}</section><h3 class="section-title">包装盒＋药板 · 12 张</h3><section class="product-grid">${cards(comboAngles)}</section>`
      : (catalogAssetContent || `<div class="empty product-empty"><h2>${studio.utils.escapeHtml(selectedSku?.name || '该产品')}</h2><p>该 SKU 尚未导入可用产品图。</p></div>`);
    container.innerHTML = `<header class="page-head"><div class="eyebrow">PRODUCT LIBRARY</div><h1>产品库</h1><p class="subtitle">选择产品并查看图片。</p></header>${selector}${legacyContent}`;
    container.querySelectorAll('[data-brand-id]').forEach(button => button.onclick = () => { libraryState.brandId = button.dataset.brandId; libraryState.productId = ''; libraryState.skuId = ''; render(container); });
    container.querySelector('#catalogProduct').onchange = event => { libraryState.productId = event.target.value; libraryState.skuId = ''; render(container); };
    container.querySelector('#catalogSku').onchange = event => { libraryState.skuId = event.target.value; render(container); };
    if (selectedSku?.id !== 'bayer-shiguang-default') return;
    container.querySelectorAll('[data-model-edit]').forEach(button => button.onclick = () => { editingFile = button.dataset.modelEdit; render(container); });
    container.querySelectorAll('[data-model-cancel]').forEach(button => button.onclick = () => { editingFile = null; render(container); });
    container.querySelectorAll('[data-model-save]').forEach(button => button.onclick = () => {
      const card = button.closest('[data-model-file]');
      const angle = [...products.angleFiles, ...products.comboAngleFiles].find(item => item.file === button.dataset.modelSave);
      angle.label = card.querySelector('[data-model-label]').value.trim() || angle.label;
      angle.cameraAngle = card.querySelector('[data-model-camera]').value;
      angle.subjectOrientation = card.querySelector('[data-model-orientation]').value;
      angle.pose = card.querySelector('[data-model-pose]').value;
      angle.supportFace = card.querySelector('[data-model-support]').value;
      angle.visibleFaces = card.querySelector('[data-model-faces]').value.trim() || angle.visibleFaces;
      persist(angle); editingFile = null; studio.state.prompt.results = []; render(container);
    });
    container.querySelector('#exportModelAngles').onclick = download;
    const input = container.querySelector('#modelAngleFile');
    container.querySelector('#importModelAngles').onclick = () => input.click();
    input.onchange = async event => {
      try {
        const imported = JSON.parse(await event.target.files[0].text());
        const known = new Map([...products.angleFiles, ...products.comboAngleFiles].map(item => [item.file, item]));
        let count = 0;
        (imported.items || []).forEach(row => { const angle = known.get(row.file); if (!angle) return; if (row.label) angle.label = row.label; if (studio.data.classification.cameraAngles.includes(row.cameraAngle)) angle.cameraAngle = row.cameraAngle; if (studio.data.classification.subjectOrientations.includes(row.subjectOrientation)) angle.subjectOrientation = row.subjectOrientation; if (poseOptions.includes(row.pose)) angle.pose = row.pose; if (supportFaceOptions.includes(row.supportFace)) angle.supportFace = row.supportFace; if (row.visibleFaces) angle.visibleFaces = row.visibleFaces; persist(angle); count += 1; });
        if (!count) throw new Error('没有匹配的产品建模参考图');
        editingFile = null; studio.state.prompt.results = []; render(container); alert(`已导入 ${count} 张产品建模角度分类。`);
      } catch (error) { alert(`导入失败：${error.message}`); }
    };
  }
  studio.features.modeling = { initialize, render, buildClassificationExport: payload };
})(globalThis.BayerStudio);


(function registerPromptWorkspace(studio) {
  'use strict';

  const promptEditKey = 'bayer-prompt-text-edits-v6';
  const manicureRotationKey = 'bayer-set-manicure-rotation-v1';
  const manicureStyles = [
    '短款自然椭圆甲，半透明裸粉色，细腻亮面，无图案无装饰',
    '短款圆甲，半透明奶白色，干净亮面，无图案无装饰',
    '短款方圆甲，半透明蜜桃裸色，细腻亮面，无图案无装饰',
    '短款自然椭圆甲，浅米杏裸色，柔和亮面，无图案无装饰',
    '短款圆甲，低饱和灰粉裸色，细腻亮面，无图案无装饰',
    '短款方圆甲，透明自然光泽，保留健康甲色，无图案无装饰'
  ];
  const filterAxes = [
    ['style', '视觉风格', ['全部', '精致随手PO', '素人随手PO']],
    ['scene', '场景类型', ['全部', '生活感', '摆拍感', '背景']],
    ['format', '展示方式', ['全部', '手持', '静置', '细节展示']],
    ['cameraAngle', '拍摄机位', ['全部', '平视', '轻微俯拍', '高位俯拍', '低机位仰拍']],
    ['subjectOrientation', '主体朝向', ['全部', '正面', '左斜', '右斜', '侧面', '不限']]
  ];

  function newShot(index) {
    return {
      id: `shot-${index + 1}`,
      combo: '',
      presentation: '静置',
      visualStyle: '精致随手PO',
      tabletSupport: '无容器（桌面静置）',
      blisterState: '正在服用（有空泡罩）'
    };
  }

  function newCustomProductSlot(index) {
    return {
      id: `custom-product-slot-${Date.now()}-${index}`,
      source: 'library',
      assetId: '',
      dataUrl: '',
      uploadMessage: '',
      productForm: ''
    };
  }

  function initialize() {
    studio.state.prompt = {
      sourceMode: 'library',
      brandId: 'bayer',
      productId: 'shiguang',
      skuId: 'bayer-shiguang-default',
      userBrief: '',
      customBrandId: 'huggies',
      customProductId: 'huggies-little-forest-diapers',
      customSkuId: 'huggies-little-forest-s62',
      customProductSource: 'library',
      customSceneSource: 'library',
      customProductAssetId: '',
      customSceneId: '',
      customProductPage: 0,
      customScenePage: 0,
      customProductForm: '全部',
      customCameraAngle: '全部',
      backgroundMode: 'adaptive',
      customProductDataUrl: '',
      customSceneDataUrl: '',
      customProductUploadMessage: '',
      customSceneUploadMessage: '',
      customSetSlots: Array.from({ length: 3 }, (_, index) => newCustomProductSlot(index)),
      selectionPlan: null,
      structuredPlan: null,
      mode: 'single',
      selectedSceneIds: new Set(),
      selectedPropIds: new Set(),
      autoSelectedPropIds: new Set(),
      filters: { style: '全部', scene: '全部', format: '全部', cameraAngle: '全部', subjectOrientation: '全部', detailTag: '全部', productForm: '全部' },
      propCategory: '全部',
      selectorTab: '场景参考',
      selectorOpen: false,
      scenePage: 0,
      propPage: 0,
      combo: '包装盒＋药板',
      presentation: '静置',
      visualStyle: '精致随手PO',
      tabletSupport: '无容器（桌面静置）',
      blisterState: '正在服用（有空泡罩）',
      count: 2,
      ratio: '3:4',
      setShots: Array.from({ length: 4 }, (_, index) => newShot(index)),
      analysisRunning: false,
      analysisMessage: '',
      analysisAbortController: null,
      analysisStartedAt: 0,
      analysisTimer: null,
      qualityMemory: '',
      setManicureStyle: '',
      results: [],
      savedTexts: {
        ...studio.services.storage.read('bayer-prompt-text-edits-v4', {}),
        ...studio.services.storage.read('bayer-prompt-text-edits-v5', {}),
        ...studio.services.storage.read(promptEditKey, {})
      }
    };
  }

  function clearGeneratedImages() {
    if (!studio.state.generation) return;
    studio.state.generation.images = [];
    studio.state.generation.resultIndex = 0;
    studio.state.generation.message = '';
    studio.state.generation.failedResults = [];
    studio.state.generation.setAnchorDataUrl = '';
    studio.state.generation.setCleanPlateRequestId = '';
    studio.state.generation.setPlateResponseId = '';
    studio.state.generation.setPlateValidation = null;
    studio.state.generation.setValidationResponseId = '';
    studio.state.generation.setValidationIndex = -1;
    studio.state.generation.setPhase = 'idle';
    studio.state.generation.setId = '';
    studio.state.generation.setMaskDataUrl = '';
    studio.state.generation.setHandAnchorDataUrl = '';
  }

  function invalidateResults() {
    studio.state.prompt.results = [];
    clearGeneratedImages();
  }

  function filteredMaterials() {
    const state = studio.state.prompt;
    return studio.state.materials.filter(item => {
      if (item.deleted) return false;
      const axesMatch = ['style', 'scene', 'format', 'cameraAngle', 'subjectOrientation']
        .every(key => state.filters[key] === '全部' || item[key] === state.filters[key]);
      const detailMatch = state.filters.detailTag === '全部' || (item.detailTags || []).includes(state.filters.detailTag);
      const productMatch = state.filters.productForm === '全部' || (item.productForms || []).includes(state.filters.productForm);
      return axesMatch && detailMatch && productMatch;
    });
  }

  function filteredProps() {
    const props = studio.state.props || studio.data.props;
    return studio.state.prompt.propCategory === '全部' ? props : props.filter(prop => prop.category === studio.state.prompt.propCategory);
  }

  function inferredPropCategory(item) {
    const text = `${item?.title || ''} ${item?.content || ''} ${item?.scene || ''}`;
    if (/床头|卧室|床边|睡眠/.test(text)) return '床头柜';
    if (/餐桌|早餐|午餐|晚餐|厨房|饮水|水杯/.test(text)) return '餐桌';
    if (/书桌|办公|电脑|阅读|学习|笔记本/.test(text)) return '书桌';
    return '梳妆台';
  }

  function autoSelectPropForScene(item) {
    const state = studio.state.prompt;
    const onlyAutomatic = state.selectedPropIds.size === 0 || [...state.selectedPropIds].every(id => state.autoSelectedPropIds.has(id));
    if (!onlyAutomatic || !item) return;
    const props = studio.state.props || studio.data.props;
    const candidates = props.filter(prop => prop.category === inferredPropCategory(item));
    if (!candidates.length) return;
    const seed = [...String(item.id || item.title || '')].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const start = seed % candidates.length;
    const selected = Array.from({ length: Math.min(3, candidates.length) }, (_, offset) => candidates[(start + offset) % candidates.length]);
    state.selectedPropIds = new Set(selected.map(prop => prop.id));
    state.autoSelectedPropIds = new Set(selected.map(prop => prop.id));
    state.propCategory = selected[0].category;
  }

  function savePromptText(key, value) {
    studio.state.prompt.savedTexts[key] = value;
    studio.services.storage.write(promptEditKey, studio.state.prompt.savedTexts);
  }

  function configurationKey(config) {
    return [config.combo, config.presentation, config.visualStyle, config.tabletSupport, config.blisterState].join('|');
  }

  function resultKey(itemId, state, variantIndex, selectedProps, config) {
    const propSignature = selectedProps.map(prop => prop.id).sort().join(',') || 'no-props';
    const manicureSignature = config.setContext?.manicureStyle || 'no-manicure';
    // Bump whenever hard prompt rules change so an older cached prompt cannot
    // bypass the current validator and reach paid generation.
    return `creation-v10|${itemId}|${state.mode}|${configurationKey(config)}|${state.ratio}|${propSignature}|${manicureSignature}|${variantIndex}`;
  }

  function configurations() {
    const state = studio.state.prompt;
    const base = {
      combo: state.combo,
      presentation: state.presentation,
      visualStyle: state.visualStyle,
      tabletSupport: state.tabletSupport,
      blisterState: state.blisterState
    };
    if (state.mode === 'single') return [{ ...base, variantIndex: 0 }];
    if (state.mode === 'multi') return Array.from({ length: state.count }, (_, variantIndex) => ({ ...base, variantIndex }));
    const packagingTotal = state.setShots.filter(shot => /包装盒/.test(shot.combo)).length;
    let packagingOrdinal = 0;
    return state.setShots.map((shot, index) => {
      const hasPackaging = /包装盒/.test(shot.combo);
      const config = {
        ...shot,
        variantIndex: index,
        setContext: { index, total: state.setShots.length, manicureStyle: state.setManicureStyle, phase: 'shot', packagingTotal, packagingOrdinal: hasPackaging ? packagingOrdinal : -1 }
      };
      if (hasPackaging) packagingOrdinal += 1;
      return config;
    });
  }

  function nextSetManicureStyle() {
    const current = Number(studio.services.storage.read(manicureRotationKey, 0)) || 0;
    const style = manicureStyles[((current % manicureStyles.length) + manicureStyles.length) % manicureStyles.length];
    studio.services.storage.write(manicureRotationKey, current + 1);
    return style;
  }

  function validationFor(text, item, combo, blisterState = '', setContext = null) {
    return studio.prompt.validatePrompt(text, {
      combo,
      referenceHasHand: studio.prompt.referenceHasHand(item),
      setInner: setContext?.phase === 'shot',
      blisterState
    });
  }

  function validationMarkup(validation) {
    return validation.valid
      ? '<div class="validation-ok">✓ 已准备</div>'
      : `<div class="validation-error">${validation.issues.map(issue => issue.message).join('；')}</div>`;
  }

  function activeSku(state) {
    return studio.data.catalogHelpers.sku(state.skuId);
  }

  function autoPlanLibrarySelection(state) {
    const request = { presentation: state.presentation, visualStyle: state.visualStyle, cameraAngle: state.filters.cameraAngle === '全部' ? '' : state.filters.cameraAngle, combo: state.combo };
    const plan = studio.services.assetPlanner.planLibrarySelection({ materials: studio.state.materials, sku: activeSku(state), request });
    state.selectionPlan = plan;
    if (plan.status === 'ready' && plan.scene) {
      state.selectedSceneIds = new Set([plan.scene.id]);
      autoSelectPropForScene(plan.scene);
    }
    invalidateResults();
  }

  function customUploadMarkup(state) {
    const upload = (key, label, value, message) => `<label class="custom-upload"><input type="file" accept="image/png,image/jpeg,image/webp" data-custom-upload="${key}">${value ? `<img src="${value}" alt="${label}">` : '<span class="upload-plus">＋</span>'}<b>${label} · 必填</b><small>${value ? (message || '点击或拖入新图片替换；仅用于当前任务') : '点击选择，或把图片直接拖到这里；大图会在本机自动生成传输副本'}</small></label>`;
    const catalog = studio.data.platformCatalog;
    const brands = catalog.brands;
    const products = catalog.products.filter(item => item.brandId === state.customBrandId);
    if (!products.some(item => item.id === state.customProductId)) state.customProductId = products[0]?.id || '';
    const skus = catalog.skus.filter(item => item.productId === state.customProductId && item.status === 'ready');
    if (!skus.some(item => item.id === state.customSkuId)) state.customSkuId = skus[0]?.id || '';
    const sku = studio.data.catalogHelpers.sku(state.customSkuId);
    const allowedProductForms = sku?.assetFilters?.productForms || [];
    const allowedCameraAngles = sku?.assetFilters?.cameraAngles || [];
    if (!['全部', ...allowedProductForms].includes(state.customProductForm)) state.customProductForm = '全部';
    if (!['全部', ...allowedCameraAngles].includes(state.customCameraAngle)) state.customCameraAngle = '全部';
    const productAssets = (sku?.assets || []).filter(asset =>
      (!allowedProductForms.length || allowedProductForms.includes(asset.productForm))
      && (state.customProductForm === '全部' || asset.productForm === state.customProductForm)
      && (state.customCameraAngle === '全部' || asset.cameraAngle === state.customCameraAngle)
    );
    const productPageSize = 5;
    const productPages = Math.max(1, Math.ceil(productAssets.length / productPageSize));
    state.customProductPage = Math.min(Math.max(0, state.customProductPage || 0), productPages - 1);
    const shownProductAssets = productAssets.slice(state.customProductPage * productPageSize, (state.customProductPage + 1) * productPageSize);
    const productPagination = `<div class="pagination"><button class="action" data-custom-product-page="prev" ${state.customProductPage === 0 ? 'disabled' : ''}>上一页</button><span>${state.customProductPage + 1} / ${productPages} · 共 ${productAssets.length} 张</span><button class="action" data-custom-product-page="next" ${state.customProductPage + 1 >= productPages ? 'disabled' : ''}>下一页</button></div>`;
    const allSceneAssets = filteredMaterials();
    const scenePageSize = 24;
    const scenePages = Math.max(1, Math.ceil(allSceneAssets.length / scenePageSize));
    state.customScenePage = Math.min(state.customScenePage, scenePages - 1);
    const sceneAssets = allSceneAssets.slice(state.customScenePage * scenePageSize, (state.customScenePage + 1) * scenePageSize);
    const sourceSwitch = (type, current) => `<div class="manual-source-switch"><button class="pill ${current === 'library' ? 'active' : ''}" data-manual-source="${type}:library">从库中选</button><button class="pill ${current === 'upload' ? 'active' : ''}" data-manual-source="${type}:upload">上传图片</button></div>`;
    const selectedProduct = productAssets.find(asset => asset.id === state.customProductAssetId);
    const selectedScene = studio.state.materials.find(asset => asset.id === state.customSceneId);
    const selectionSummary = (item, emptyText) => item
      ? `<span class="selection-preview"><img src="${encodeURI(item.image)}" alt=""><b>${studio.utils.escapeHtml(item.label || item.title)}</b><em>更换</em></span>`
      : `<span class="selection-preview empty"><b>${emptyText}</b><em>展开选择</em></span>`;
    const productPicker = state.customProductSource === 'upload'
      ? upload('customProductDataUrl', '产品图', state.customProductDataUrl, state.customProductUploadMessage)
      : `<div class="catalog-fields manual-catalog"><label>品牌<select id="customBrand">${brands.map(item => `<option value="${item.id}"${item.id === state.customBrandId ? ' selected' : ''}>${item.name}</option>`).join('')}</select></label><label>产品<select id="customProduct">${products.map(item => `<option value="${item.id}"${item.id === state.customProductId ? ' selected' : ''}>${item.name}</option>`).join('')}</select></label><label>SKU<select id="customSku">${skus.map(item => `<option value="${item.id}"${item.id === state.customSkuId ? ' selected' : ''}>${item.name}</option>`).join('')}</select></label><label>类型<select id="customProductForm">${selectOptions(['全部', ...allowedProductForms], state.customProductForm)}</select></label><label>角度<select id="customCameraAngle">${selectOptions(['全部', ...allowedCameraAngles], state.customCameraAngle)}</select></label></div><div class="manual-asset-grid">${shownProductAssets.map(asset => `<button class="manual-asset-card ${state.customProductAssetId === asset.id ? 'selected' : ''}" data-custom-product-asset="${asset.id}" type="button"><img src="${encodeURI(asset.image)}" alt="${studio.utils.escapeHtml(asset.label)}"><span>${studio.utils.escapeHtml(asset.label)}</span></button>`).join('') || '<div class="empty">当前筛选没有产品图</div>'}</div>${productPagination}`;
    const setSlotMarkup = () => {
      const slots = state.customSetSlots;
      const catalogHeader = `<div class="catalog-fields manual-catalog"><label>品牌<select id="customBrand">${brands.map(item => `<option value="${item.id}"${item.id === state.customBrandId ? ' selected' : ''}>${item.name}</option>`).join('')}</select></label><label>产品<select id="customProduct">${products.map(item => `<option value="${item.id}"${item.id === state.customProductId ? ' selected' : ''}>${item.name}</option>`).join('')}</select></label><label>SKU<select id="customSku">${skus.map(item => `<option value="${item.id}"${item.id === state.customSkuId ? ' selected' : ''}>${item.name}</option>`).join('')}</select></label></div>`;
      return `${catalogHeader}<div class="custom-set-slots">${slots.map((slot, index) => {
        const selected = productAssets.find(asset => asset.id === slot.assetId);
        const preview = selected?.image || slot.dataUrl;
        return `<article class="custom-set-slot"><header><b>套图产品 ${index + 1}</b><div><button class="pill ${slot.source === 'library' ? 'active' : ''}" data-set-slot-source="${index}:library" type="button">从库中选</button><button class="pill ${slot.source === 'upload' ? 'active' : ''}" data-set-slot-source="${index}:upload" type="button">上传图片</button>${slots.length > 1 ? `<button class="action" data-remove-set-slot="${index}" type="button">移除</button>` : ''}</div></header>${slot.source === 'upload'
          ? `${upload(`setSlot:${index}`, `产品形态 ${index + 1}`, slot.dataUrl, slot.uploadMessage)}<label class="slot-form-label">产品形态（可选）<input data-set-slot-form="${index}" value="${studio.utils.escapeHtml(slot.productForm)}" placeholder="例如：外包装＋单片"></label>`
          : `<details class="picker-details" ${selected ? '' : 'open'}><summary>${selectionSummary(selected, '选择这一张套图所用产品图')}</summary><div class="picker-body"><div class="manual-asset-grid">${shownProductAssets.map(asset => `<button class="manual-asset-card ${slot.assetId === asset.id ? 'selected' : ''}" data-set-slot-asset="${index}:${asset.id}" type="button"><img src="${encodeURI(asset.image)}" alt="${studio.utils.escapeHtml(asset.label)}"><span>${studio.utils.escapeHtml(asset.label)}</span></button>`).join('') || '<div class="empty">当前SKU没有可用产品图</div>'}</div>${productPagination}</div></details>`}<input type="hidden" value="${preview ? 'ready' : ''}"></article>`;
      }).join('')}</div>${slots.length < 5 ? '<button class="action add-set-slot" id="addCustomSetSlot" type="button">＋ 添加产品形态</button>' : '<small>已达到最多5张产品图</small>'}`;
    };
    const scenePicker = state.customSceneSource === 'upload'
      ? upload('customSceneDataUrl', '参考图', state.customSceneDataUrl, state.customSceneUploadMessage)
      : `<div class="manual-asset-grid scene">${sceneAssets.map(asset => `<button class="manual-asset-card ${state.customSceneId === asset.id ? 'selected' : ''}" data-custom-scene="${asset.id}" type="button"><img src="${encodeURI(asset.image)}" alt="${studio.utils.escapeHtml(asset.title)}"><span>${studio.utils.escapeHtml(asset.title)}</span></button>`).join('') || '<div class="empty">当前没有符合条件的参考图</div>'}</div><div class="pagination"><button class="action" data-custom-scene-page="prev" ${state.customScenePage === 0 ? 'disabled' : ''}>上一页</button><span>${state.customScenePage + 1} / ${scenePages} · 共 ${allSceneAssets.length} 张</span><button class="action" data-custom-scene-page="next" ${state.customScenePage + 1 >= scenePages ? 'disabled' : ''}>下一页</button></div>`;
    return `<section class="custom-generation-panel manual-workflow">
      <article class="manual-step"><div class="step-number">1</div><div class="step-content"><div class="manual-step-head"><b>${state.mode === 'set' ? '为每张套图选择产品形态' : '选产品图'}</b>${state.mode === 'set' ? '' : sourceSwitch('product', state.customProductSource)}</div>${state.mode === 'set' ? setSlotMarkup() : `<details class="picker-details" ${selectedProduct || state.customProductDataUrl ? '' : 'open'}><summary>${state.customProductSource === 'upload' ? selectionSummary(state.customProductDataUrl ? { image: state.customProductDataUrl, label: '已上传产品图' } : null, '请上传产品图') : selectionSummary(selectedProduct, '请从产品库选择1张')}</summary><div class="picker-body">${productPicker}</div></details>`}</div></article>
      <article class="manual-step"><div class="step-number">2</div><div class="step-content"><div class="manual-step-head"><b>选参考图</b>${sourceSwitch('scene', state.customSceneSource)}</div><details class="picker-details" ${selectedScene || state.customSceneDataUrl ? '' : 'open'}><summary>${state.customSceneSource === 'upload' ? selectionSummary(state.customSceneDataUrl ? { image: state.customSceneDataUrl, label: '已上传参考图' } : null, '请上传参考图') : selectionSummary(selectedScene, '请从参考图库选择1张')}</summary><div class="picker-body">${scenePicker}</div></details></div></article>
      <article class="manual-step"><div class="step-number">3</div><div class="step-content"><div class="manual-step-head"><b>设置需求</b></div><div class="mode-buttons compact">${studio.data.products.generationModes.map(mode => `<button class="mode-card ${state.mode === mode.value ? 'active' : ''}" data-generation-mode="${mode.value}">${mode.label}</button>`).join('')}</div><div class="manual-settings">${state.mode === 'multi' ? `<label>数量<input id="promptCount" type="number" min="2" max="5" value="${state.count}"></label>` : ''}<label>图片比例<select id="promptRatio">${selectOptions(['1:1','3:4','4:3','4:5','9:16','16:9'], state.ratio)}</select></label><label>背景处理<select id="backgroundMode"><option value="adaptive"${state.backgroundMode === 'adaptive' ? ' selected' : ''}>70%视觉基因 / 30%画面重构</option><option value="exact"${state.backgroundMode === 'exact' ? ' selected' : ''}>完全还原参考背景</option></select></label></div><label class="experience-prompt"><b>其他需求（可选）</b><textarea id="customUserBrief" rows="2" placeholder="例如：整体像手机随手拍。">${studio.utils.escapeHtml(state.userBrief)}</textarea></label></div></article>
      <article class="manual-step final-step"><div class="step-number">4</div><div class="step-content"><b>确认后生图</b></div></article>
    </section>`;
  }

  async function customStructuredPlan(state) {
    const sku = studio.data.catalogHelpers.sku(state.customSkuId);
    const skuAssets = sku?.assets || [];
    const productAsset = state.customProductSource === 'library' ? skuAssets.find(asset => asset.id === state.customProductAssetId) : null;
    const sceneAsset = state.customSceneSource === 'library' ? studio.state.materials.find(asset => asset.id === state.customSceneId) : null;
    const sceneImage = sceneAsset?.image || state.customSceneDataUrl;
    const productInputs = state.mode === 'set'
      ? state.customSetSlots.map((slot, index) => {
          const asset = slot.source === 'library' ? skuAssets.find(candidate => candidate.id === slot.assetId) : null;
          return { asset, image: asset?.image || slot.dataUrl, label: asset?.label || slot.productForm || `用户上传产品形态 ${index + 1}`, slot };
        })
      : [{ asset: productAsset, image: productAsset?.image || state.customProductDataUrl, label: productAsset?.label || '用户上传产品图' }];
    const missingSlot = productInputs.findIndex(input => !input.image);
    if (missingSlot >= 0) throw new Error(`请先为${state.mode === 'set' ? `套图产品 ${missingSlot + 1}` : '当前方案'}选择或上传产品图`);
    const basePreflight = studio.services.assetPlanner.fusionPreflight({ mode: 'custom-upload', productUploaded: productInputs.every(input => Boolean(input.image)), sceneUploaded: Boolean(sceneImage) });
    const referenceChecks = productInputs.map(input => studio.services.assetPlanner.productReferencePreflight({
      productCategory: studio.data.catalogHelpers.product(state.customProductId)?.category || '',
      productAsset: input.asset,
      // The pilot profile belongs to the legacy one-image diaper check. A set
      // intentionally uses a different product form for every shot.
      outputProfile: state.mode === 'set' ? {} : (sku?.pilotOutputProfile || {})
    }));
    const preflight = {
      ...basePreflight,
      status: basePreflight.status === 'ready' && referenceChecks.every(check => check.status === 'ready') ? 'ready' : 'blocked',
      blockers: [...basePreflight.blockers, ...referenceChecks.flatMap(check => check.blockers)],
      warnings: [...basePreflight.warnings, ...referenceChecks.flatMap(check => check.warnings)],
      checks: [...basePreflight.checks, ...referenceChecks.flatMap(check => check.checks)]
    };
    if (preflight.status !== 'ready') throw new Error(`融合预检未通过：${preflight.blockers.join('；')}`);
    const item = sceneAsset || { id: `custom-scene-${Date.now()}`, image: sceneImage, title: '用户上传参考图', style: '自定义', format: '静置', shot: '静置' };
    let sceneFingerprint = null;
    try {
      sceneFingerprint = await studio.services.sceneAnalysis.analyze(item, { force: true });
    } catch (error) {
      sceneFingerprint = null;
    }
    const sceneGuide = sceneFingerprint ? studio.services.sceneAnalysis.promptGuide(sceneFingerprint) : '';
    const plan = studio.services.assetPlanner.structuredPromptPlan({
      mode: 'manual', userGoal: state.userBrief, backgroundMode: state.backgroundMode, ratio: state.ratio,
      productForm: state.mode === 'set' ? '按各镜头所选产品形态' : (productAsset?.productForm || '用户上传产品'), productLabel: state.mode === 'set' ? '每个镜头对应的唯一产品原图' : (productAsset?.label || '用户上传产品图'),
      productCategory: studio.data.catalogHelpers.product(state.customProductId)?.category || '',
      genericProductSet: state.mode === 'set',
      relativeScaleCovered: Boolean(sku?.poseCoverage?.scale),
      selectedAssets: [...productInputs.map(input => input.label), sceneAsset?.title || '当前任务上传参考图'],
      selectionReasons: ['每个镜头只读取其对应产品原图', '参考场景由用户明确选择', state.backgroundMode === 'exact' ? '客户要求严格复刻背景' : '环境执行70%视觉基因保留/30%画面重构'],
      sceneGuide
    });
    state.structuredPlan = plan;
    const configBase = { combo: productInputs[0].asset?.productForm || productInputs[0].label || '自定义产品', presentation: '按所选产品角度', visualStyle: '自定义融合', tabletSupport: '', blisterState: '' };
    const total = state.mode === 'set' ? productInputs.length : (state.mode === 'multi' ? state.count : 1);
    const generationSource = state.customProductSource === 'library' && state.customSceneSource === 'library' ? 'manual-library' : 'manual-upload';
    const setShotGuides = [
      '主视觉：产品为第一视觉落点，保留足够环境语境与真实承托。',
      '中近景：突出当前产品形态与包装信息，改变画面重心但不改变产品像素身份。',
      '近景：呈现产品材质、边缘与真实接触关系，不虚构未展示结构。',
      '补充视角：调整裁切和景深形成节奏，背景身份与前序镜头一致。',
      '留白视角：产品仍是主体，同时为后续排版保留干净负空间。'
    ];
    state.results = Array.from({ length: total }, (_, index) => {
      const productInput = state.mode === 'set' ? productInputs[index] : productInputs[0];
      const config = { ...configBase, combo: productInput.asset?.productForm || productInput.label || configBase.combo, variantIndex: index, ...(state.mode === 'set' ? { setContext: { index, total, phase: 'shot', genericProductSet: true } } : {}) };
      const variation = state.mode === 'set'
        ? `套图镜头 ${index + 1}/${total}，当前唯一产品形态：${productInput.label}。${setShotGuides[index]}`
        : (state.mode === 'multi' ? `独立方案 ${index + 1}/${total}：在不改变产品身份与已展示面的前提下，调整构图重心和局部摆放。` : '');
      const prompt = [plan.finalPrompt, variation].filter(Boolean).join('\n');
      return {
        key: `manual-${Date.now()}-${index}`, item, sourceItem: item, variantIndex: index, selectedProps: [], sceneFingerprint: sceneFingerprint || plan,
        mode: state.mode, custom: true, config, setContext: config.setContext,
        brandId: productAsset ? state.customBrandId : 'custom', productId: productAsset ? state.customProductId : 'custom-upload', skuId: productAsset ? state.customSkuId : 'custom-upload', generationSource,
        productReference: { image: productInput.image, label: `${productInput.label}（当前镜头不可修改的产品像素身份、可见面与比例依据）`, proportionReference: null, additionalReferences: [] },
        prompt, text: prompt, structuredPlan: plan, preflight
      };
    });
    state.analysisMessage = '已准备。';
    clearGeneratedImages();
  }

  function selectionPlanMarkup(state) {
    const plan = state.selectionPlan;
    if (!plan) return '';
    if (plan.status !== 'ready') return `<div class="selection-plan blocked"><b>已阻止进入生图</b><span>${plan.blockers.map(value => studio.utils.escapeHtml(value)).join('；')}</span></div>`;
    return '<div class="selection-plan ready"><b>已自动选材</b></div>';
  }

  function preflightMarkup(preflight) {
    if (!preflight) return '';
    const ready = preflight.status === 'ready';
    return ready
      ? '<div class="fusion-preflight ready"><b>✓ 已准备</b></div>'
      : `<div class="fusion-preflight blocked"><b>请检查选材</b><span>${studio.utils.escapeHtml(preflight.blockers.join('；'))}</span></div>`;
  }

  async function copyText(value) {
    try {
      await navigator.clipboard.writeText(value);
    } catch (error) {
      const area = document.createElement('textarea');
      area.value = value;
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.append(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
  }

  async function buildResults() {
    const state = studio.state.prompt;
    const sceneId = [...state.selectedSceneIds][0];
    if (!sceneId) {
      state.analysisRunning = false;
      alert('请先选择一张场景参考素材');
      return;
    }
    if (state.mode === 'set' && state.setShots.some(shot => !shot.combo)) {
      state.analysisRunning = false;
      alert('请为套图的4个镜头分别选择产品组合');
      return;
    }
    clearGeneratedImages();
    const item = studio.state.materials.find(material => material.id === sceneId);
    autoSelectPropForScene(item);
    const selectedProps = (studio.state.props || studio.data.props)
      .filter(prop => state.selectedPropIds.has(prop.id))
      .map(prop => ({ ...prop, autoMatched: state.autoSelectedPropIds.has(prop.id) }));
    state.analysisRunning = true;
    state.analysisMessage = '正在读取历史质量记忆，并用 Gemini 倒推场景结构…';
    let analysisFailure = '';
    try {
      await studio.services.sceneAnalysis.analyze(item, { signal: state.analysisAbortController?.signal });
    } catch (error) {
      analysisFailure = error.message;
    }
    state.setManicureStyle = state.mode === 'set' ? nextSetManicureStyle() : '';
    const plannedConfigurations = configurations();
    const qualityMemories = await Promise.all(plannedConfigurations.map(config => studio.services.reviewHistory.qualityMemory(config)));
    state.qualityMemory = qualityMemories.some(Boolean) ? '已按各镜头配置读取' : '';
    const sceneFingerprint = studio.services.sceneAnalysis.get(item.id);
    const usedPackagingReferences = new Set();
    const results = plannedConfigurations.map((config, configIndex) => {
      const generatedItem = {
        ...item,
        style: config.visualStyle,
        format: config.presentation === '手持' ? '手持' : (config.combo === '药片细节' ? '细节展示' : '静置'),
        shot: config.presentation
      };
      const promptInput = {
        item: generatedItem,
        variantIndex: config.variantIndex,
        combo: config.combo,
        ratio: state.ratio,
        selectedProps,
        sceneFingerprint,
        presentation: config.presentation,
        visualStyle: config.visualStyle,
        tabletSupport: config.tabletSupport,
        blisterState: config.blisterState,
        setContext: config.setContext || null,
        qualityMemory: qualityMemories[configIndex]
      };
      let resolvedVariantIndex = config.variantIndex;
      let generated = studio.prompt.generatePrompt(promptInput);
      if (state.mode === 'set' && /包装盒/.test(config.combo)) {
        for (let offset = 1; usedPackagingReferences.has(generated.productReference.image) && offset < 12; offset += 1) {
          resolvedVariantIndex = config.variantIndex + offset;
          generated = studio.prompt.generatePrompt({ ...promptInput, variantIndex: resolvedVariantIndex });
        }
        usedPackagingReferences.add(generated.productReference.image);
      }
      const key = resultKey(item.id, state, resolvedVariantIndex, selectedProps, config);
      return {
        key,
        item: generatedItem,
        sourceItem: item,
        variantIndex: resolvedVariantIndex,
        selectedProps,
        sceneFingerprint,
        mode: state.mode,
        config,
        ...generated,
        text: state.savedTexts[key] ?? generated.prompt,
        preflight: studio.services.assetPlanner.fusionPreflight({
          mode: 'library',
          sku: activeSku(state),
          selectionPlan: state.selectionPlan || {
            status: 'ready', confidence: 70, scene: item,
            productAsset: generated.productReference,
            identityAsset: generated.productReference?.proportionReference
          }
        })
      };
    });
    state.results = results;
    state.analysisRunning = false;
    state.analysisMessage = analysisFailure
      ? `Gemini 未完成场景分析，已使用70/30基础规则。${analysisFailure}`
      : `场景指纹已锁定；${state.qualityMemory ? '历史质量记忆已应用' : '当前暂无已评分质量记忆'}；已生成 ${results.length} 个镜头提示词。`;
  }

  function selectOptions(values, selected) {
    return values.map(value => `<option value="${studio.utils.escapeHtml(value)}"${value === selected ? ' selected' : ''}>${studio.utils.escapeHtml(value)}</option>`).join('');
  }

  function conditionalControls(config, prefix) {
    const blister = ['包装盒＋药板', '药板'].includes(config.combo)
      ? `<label>药板状态<select data-config-field="blisterState" data-config-prefix="${prefix}">${selectOptions(studio.data.products.blisterStates, config.blisterState)}</select></label>` : '';
    const tablet = config.combo === '药片细节'
      ? `<label>药片承托／容器<select data-config-field="tabletSupport" data-config-prefix="${prefix}">${selectOptions(studio.data.products.tabletSupports, config.tabletSupport)}</select></label>` : '';
    return `${blister}${tablet}`;
  }

  function commonConfigMarkup(config, prefix) {
    const comboOptions = prefix.startsWith('shot:') ? ['', ...studio.data.products.combos] : studio.data.products.combos;
    return `<label>产品组合<select data-config-field="combo" data-config-prefix="${prefix}">${comboOptions.map(value => `<option value="${studio.utils.escapeHtml(value)}"${value === config.combo ? ' selected' : ''}>${studio.utils.escapeHtml(value || '请选择产品组合')}</option>`).join('')}</select></label>
      <label>展示方式<select data-config-field="presentation" data-config-prefix="${prefix}">${selectOptions(studio.data.products.presentations, config.presentation)}</select></label>
      <label>视觉风格<select data-config-field="visualStyle" data-config-prefix="${prefix}">${selectOptions(studio.data.products.visualStyles, config.visualStyle)}</select></label>
      ${conditionalControls(config, prefix)}`;
  }

  function modeSettingsMarkup(state) {
    const base = { combo: state.combo, presentation: state.presentation, visualStyle: state.visualStyle, tabletSupport: state.tabletSupport, blisterState: state.blisterState };
    if (state.mode === 'set') {
      return `<div class="set-intro"><b>套图设置</b><span>先确认背景，再生成套图。</span></div>
        <div class="shot-grid">${state.setShots.map((shot, index) => `<article class="shot-card"><div class="shot-number">正式镜头 ${index + 1}</div><div class="shot-fields">${commonConfigMarkup(shot, `shot:${index}`)}</div></article>`).join('')}</div>`;
    }
    return `<div class="creation-fields">${commonConfigMarkup(base, 'base')}${state.mode === 'multi' ? `<label>独立图片数量<input id="promptCount" type="number" min="2" max="5" value="${state.count}"></label>` : ''}</div>`;
  }

  function renderResults() {
    const state = studio.state.prompt;
    if (!state.results.length) return '';
    return `<section class="prompt-results">${state.results.map((result, index) => {
        const extraProductReferences = result.productReference.additionalReferences || [];
        const references = [
          { image: result.sourceItem.image, label: `场景参考 · ${result.sourceItem.id}` },
          { image: result.productReference.image, label: `唯一产品参考 · ${result.productReference.label}` },
          ...(result.productReference.proportionReference ? [{ image: result.productReference.proportionReference.image, label: result.productReference.proportionReference.label }] : []),
          ...extraProductReferences,
          ...result.selectedProps.map(prop => ({ image: prop.image, label: `${prop.autoMatched ? '系统自动匹配道具' : '道具候选'} · ${prop.label}` }))
        ];
        const validation = result.custom ? validationMarkup(studio.prompt.validateResultPrompt(result)) : validationMarkup(validationFor(result.text, result.item, result.config.combo, result.config.blisterState, result.setContext));
        const title = result.mode === 'set' ? `套图镜头 ${index + 1}` : `方案 ${index + 1}`;
        return `<article class="prompt-result" data-result="${result.key}"><div class="result-summary"><div class="result-meta">${title} · ${studio.utils.escapeHtml(result.config.combo)}</div><span class="generation-status ready">已准备</span></div><div class="references">${references.map(reference => `<figure><img src="${encodeURI(reference.image)}" alt="${studio.utils.escapeHtml(reference.label)}"><figcaption>${studio.utils.escapeHtml(reference.label)}</figcaption></figure>`).join('')}</div><details class="advanced-panel"><summary>高级设置 · 查看或编辑完整提示词</summary><div class="advanced-panel-body"><div class="scene-analysis-state ${result.sceneFingerprint ? 'ready' : 'fallback'}">${result.custom ? '结构化生图计划' : (result.sceneFingerprint ? 'Gemini场景指纹已应用' : '使用70/30基础规则')}</div>${preflightMarkup(result.preflight)}${validation}<textarea rows="8">${studio.utils.escapeHtml(result.text)}</textarea><div class="actions"><button class="action" data-expand-prompt>展开全文</button><button class="action" data-copy>复制此条</button><button class="action" data-restore>恢复自动版本</button></div></div></details></article>`;
      }).join('')}</section>`;
  }

  function selectorMarkup(state, materials, props) {
    const pageSize = 24;
    const scenePages = Math.max(1, Math.ceil(materials.length / pageSize));
    const propPages = Math.max(1, Math.ceil(props.length / pageSize));
    state.scenePage = Math.min(state.scenePage, scenePages - 1);
    state.propPage = Math.min(state.propPage, propPages - 1);
    const shownMaterials = materials.slice(state.scenePage * pageSize, (state.scenePage + 1) * pageSize);
    const shownProps = props.slice(state.propPage * pageSize, (state.propPage + 1) * pageSize);
    const selectedScene = studio.state.materials.find(item => state.selectedSceneIds.has(item.id));
    const selectedProps = (studio.state.props || studio.data.props).filter(item => state.selectedPropIds.has(item.id));
    const thumbs = [selectedScene, ...selectedProps].filter(Boolean).map(item => `<img src="${encodeURI(item.image)}" title="${studio.utils.escapeHtml(item.title || item.label)}${state.autoSelectedPropIds.has(item.id) ? '（系统自动匹配）' : ''}" alt="${studio.utils.escapeHtml(item.id)}">`).join('');
    const isScene = state.selectorTab === '场景参考';
    const filterSelects = filterAxes.map(([key, label, values]) => `<label>${label}<select data-prompt-filter="${key}">${selectOptions(values, state.filters[key])}</select></label>`).join('');
    const autoStatus = state.autoSelectedPropIds.size ? ` · 系统自动匹配 ${state.autoSelectedPropIds.size}` : '';
    return `<section class="compact-selector"><div class="selector-head"><h3 class="section-title">参考选择 · 场景 ${state.selectedSceneIds.size}/1 · 道具候选 ${state.selectedPropIds.size}${autoStatus}</h3><button class="action" id="toggleReferenceSelector">${state.selectorOpen ? '收起选择器' : '展开选择器'}</button></div><div class="selected-thumb-strip">${thumbs || '<span class="count">选择场景后将自动匹配并展示3组道具候选，AI从中自然采用2组</span>'}</div>${state.selectorOpen ? `<div class="selector-tabs">${['场景参考', '道具'].map(value => `<button class="pill ${state.selectorTab === value ? 'active' : ''}" data-selector-tab="${value}">${value}</button>`).join('')}</div>${isScene ? `<div class="selector-filter-grid">${filterSelects}${state.filters.format === '细节展示' ? `<label>细节类型<select data-prompt-filter="detailTag">${selectOptions(['全部', ...studio.data.classification.detailTags], state.filters.detailTag)}</select></label>` : ''}<label>产品形态<select data-prompt-filter="productForm">${selectOptions(['全部', ...studio.data.classification.productForms], state.filters.productForm)}</select></label></div><div class="compact-reference-grid">${shownMaterials.map(item => `<article class="card selectable ${state.selectedSceneIds.has(item.id) ? 'selected' : ''}" data-scene="${item.id}"><span class="selection-mark">✓</span><img src="${encodeURI(item.image)}" alt="${studio.utils.escapeHtml(item.title)}" loading="lazy"><div class="card-body"><span class="code">${item.id}</span><h2>${studio.utils.escapeHtml(item.title)}</h2></div></article>`).join('')}</div><div class="pagination"><button class="action" data-page="scene-prev" ${state.scenePage === 0 ? 'disabled' : ''}>上一页</button><span>${state.scenePage + 1} / ${scenePages} · ${materials.length} 张</span><button class="action" data-page="scene-next" ${state.scenePage + 1 >= scenePages ? 'disabled' : ''}>下一页</button></div>` : `<div class="selector-filter-grid"><label>道具区域<select id="propCategorySelect">${selectOptions(['全部', ...studio.data.classification.propCategories], state.propCategory)}</select></label></div><div class="compact-reference-grid">${shownProps.map(prop => `<article class="card selectable ${state.selectedPropIds.has(prop.id) ? 'selected' : ''}" data-prop="${prop.id}"><span class="selection-mark">✓</span><img src="${encodeURI(prop.image)}" alt="${studio.utils.escapeHtml(prop.label)}" loading="lazy"><div class="card-body"><h2>${studio.utils.escapeHtml(prop.label)}</h2></div></article>`).join('')}</div><div class="pagination"><button class="action" data-page="prop-prev" ${state.propPage === 0 ? 'disabled' : ''}>上一页</button><span>${state.propPage + 1} / ${propPages} · ${props.length} 张</span><button class="action" data-page="prop-next" ${state.propPage + 1 >= propPages ? 'disabled' : ''}>下一页</button></div>`}` : ''}</section>`;
  }

  function bindConfigurationControls(container, state) {
    container.querySelectorAll('[data-config-field]').forEach(control => control.onchange = event => {
      const prefix = control.dataset.configPrefix;
      const target = prefix === 'base' ? state : state.setShots[Number(prefix.split(':')[1])];
      target[control.dataset.configField] = event.target.value;
      if (control.dataset.configField === 'combo' && event.target.value === '药片细节' && !target.tabletSupport) target.tabletSupport = '无容器（桌面静置）';
      invalidateResults();
      render(container);
    });
  }

  function render(container) {
    const state = studio.state.prompt;
    const materials = filteredMaterials();
    const props = filteredProps();
    const catalog = studio.data.platformCatalog;
    const productsForBrand = catalog.products.filter(item => item.brandId === state.brandId);
    if (!productsForBrand.some(item => item.id === state.productId)) state.productId = productsForBrand[0]?.id || '';
    const skusForProduct = catalog.skus.filter(item => item.productId === state.productId);
    if (!skusForProduct.some(item => item.id === state.skuId)) state.skuId = skusForProduct[0]?.id || '';
    const sourceMode = `<section class="source-mode compact"><span>素材来源</span><div class="segmented-control"><button class="pill ${state.sourceMode === 'library' ? 'active' : ''}" data-source-mode="library">库内自动</button><button class="pill ${state.sourceMode === 'custom' ? 'active' : ''}" data-source-mode="custom">手动选图 / 上传</button></div></section>`;
    const productSelector = `<section class="catalog-fields creation-catalog"><label>品牌<select id="creationBrand">${catalog.brands.map(item => `<option value="${item.id}"${item.id === state.brandId ? ' selected' : ''}>${item.name}</option>`).join('')}</select></label><label>产品<select id="creationProduct">${productsForBrand.map(item => `<option value="${item.id}"${item.id === state.productId ? ' selected' : ''}>${item.name}</option>`).join('')}</select></label><label>SKU<select id="creationSku">${skusForProduct.map(item => `<option value="${item.id}"${item.id === state.skuId ? ' selected' : ''}>${item.name}</option>`).join('')}</select></label><button class="action primary" id="autoSelectAssets" type="button">智能自动选材</button></section>`;
    container.innerHTML = `<header class="page-head"><div class="eyebrow">CREATION WORKSPACE</div><h1>创作与生图</h1><p class="subtitle">选产品，选参考图，确认后生成。</p></header>${sourceMode}
      ${state.sourceMode === 'library' ? productSelector : customUploadMarkup(state)}${selectionPlanMarkup(state)}
      ${state.sourceMode === 'library' ? `<section class="creation-mode"><b>先选择生成类型</b><div class="mode-buttons">${studio.data.products.generationModes.map(mode => `<button class="mode-card ${state.mode === mode.value ? 'active' : ''}" data-generation-mode="${mode.value}">${mode.label}</button>`).join('')}</div></section><section class="prompt-settings creation-settings">${modeSettingsMarkup(state)}<div class="creation-common"><label>图片比例<select id="promptRatio">${selectOptions(['1:1','3:4','4:3','4:5','9:16','16:9'], state.ratio)}</select></label><div class="similarity-scale"><b>场景相似尺度</b><span>约70%视觉基因 · 约30%画面重构</span></div></div></section>` : ''}
      ${state.sourceMode === 'library' ? selectorMarkup(state, materials, props) : ''}
      <div class="toolbar workflow-submit"><span class="count" id="promptAnalysisStatus">${state.analysisMessage || '选好产品图和参考图后，即可准备生图。'}</span><div class="actions"><button class="action" id="clearPromptWorkspace" ${state.analysisRunning ? 'disabled' : ''}>清空</button><button class="action primary" id="buildPrompts" ${state.analysisRunning ? 'disabled' : ''}>${state.analysisRunning ? '正在分析…' : '准备生图'}</button>${state.analysisRunning ? '<button class="action" id="cancelPromptAnalysis" type="button">取消分析</button>' : ''}</div></div>
      ${renderResults()}<div id="generationMount"></div>`;

    container.querySelectorAll('[data-source-mode]').forEach(button => button.onclick = () => { state.sourceMode = button.dataset.sourceMode; state.results = []; state.selectionPlan = null; state.analysisMessage = ''; clearGeneratedImages(); render(container); });
    if (state.sourceMode === 'library') {
      container.querySelector('#creationBrand').onchange = event => { state.brandId = event.target.value; state.productId = ''; state.skuId = ''; state.selectionPlan = null; render(container); };
      container.querySelector('#creationProduct').onchange = event => { state.productId = event.target.value; state.skuId = ''; state.selectionPlan = null; render(container); };
      container.querySelector('#creationSku').onchange = event => { state.skuId = event.target.value; state.selectionPlan = null; render(container); };
      container.querySelector('#autoSelectAssets').onclick = () => { autoPlanLibrarySelection(state); render(container); };
    } else {
      container.querySelectorAll('[data-manual-source]').forEach(button => button.onclick = () => {
        const [kind, value] = button.dataset.manualSource.split(':');
        state[kind === 'product' ? 'customProductSource' : 'customSceneSource'] = value;
        if (kind === 'product') state.customProductPage = 0;
        invalidateResults(); render(container);
      });
      const customBrand = container.querySelector('#customBrand');
      if (customBrand) customBrand.onchange = event => { state.customBrandId = event.target.value; state.customProductId = ''; state.customSkuId = ''; state.customProductAssetId = ''; state.customProductPage = 0; invalidateResults(); render(container); };
      const customProduct = container.querySelector('#customProduct');
      if (customProduct) customProduct.onchange = event => { state.customProductId = event.target.value; state.customSkuId = ''; state.customProductAssetId = ''; state.customProductPage = 0; invalidateResults(); render(container); };
      const customSku = container.querySelector('#customSku');
      if (customSku) customSku.onchange = event => { state.customSkuId = event.target.value; state.customProductAssetId = ''; state.customProductPage = 0; invalidateResults(); render(container); };
      const customProductForm = container.querySelector('#customProductForm');
      if (customProductForm) customProductForm.onchange = event => { state.customProductForm = event.target.value; state.customProductAssetId = ''; state.customProductPage = 0; invalidateResults(); render(container); };
      const customCameraAngle = container.querySelector('#customCameraAngle');
      if (customCameraAngle) customCameraAngle.onchange = event => { state.customCameraAngle = event.target.value; state.customProductAssetId = ''; state.customProductPage = 0; invalidateResults(); render(container); };
      container.querySelectorAll('[data-custom-product-asset]').forEach(button => button.onclick = () => { state.customProductAssetId = button.dataset.customProductAsset; invalidateResults(); render(container); });
      container.querySelectorAll('[data-custom-product-page]').forEach(button => button.onclick = () => { state.customProductPage += button.dataset.customProductPage === 'next' ? 1 : -1; render(container); });
      container.querySelectorAll('[data-set-slot-source]').forEach(button => button.onclick = () => {
        const [index, source] = button.dataset.setSlotSource.split(':');
        state.customSetSlots[Number(index)].source = source;
        invalidateResults(); render(container);
      });
      container.querySelectorAll('[data-set-slot-asset]').forEach(button => button.onclick = () => {
        const separator = button.dataset.setSlotAsset.indexOf(':');
        const index = Number(button.dataset.setSlotAsset.slice(0, separator));
        state.customSetSlots[index].assetId = button.dataset.setSlotAsset.slice(separator + 1);
        invalidateResults(); render(container);
      });
      container.querySelectorAll('[data-set-slot-form]').forEach(input => input.oninput = event => {
        state.customSetSlots[Number(input.dataset.setSlotForm)].productForm = event.target.value;
        invalidateResults();
      });
      container.querySelectorAll('[data-remove-set-slot]').forEach(button => button.onclick = () => {
        state.customSetSlots.splice(Number(button.dataset.removeSetSlot), 1);
        invalidateResults(); render(container);
      });
      const addCustomSetSlot = container.querySelector('#addCustomSetSlot');
      if (addCustomSetSlot) addCustomSetSlot.onclick = () => {
        if (state.customSetSlots.length < 5) state.customSetSlots.push(newCustomProductSlot(state.customSetSlots.length));
        invalidateResults(); render(container);
      };
      container.querySelectorAll('[data-custom-scene]').forEach(button => button.onclick = () => { state.customSceneId = button.dataset.customScene; invalidateResults(); render(container); });
      container.querySelectorAll('[data-custom-scene-page]').forEach(button => button.onclick = () => { state.customScenePage += button.dataset.customScenePage === 'next' ? 1 : -1; render(container); });
      const handleCustomUpload = async (input, file) => {
        if (!file) return;
        try {
          const slotMatch = input.dataset.customUpload.match(/^setSlot:(\d+)$/);
          const isProduct = input.dataset.customUpload === 'customProductDataUrl' || Boolean(slotMatch);
          const optimized = studio.services.experienceGeneration.needsOptimization(file);
          const dataUrl = await studio.services.experienceGeneration.fileDataUrl(file, isProduct ? '产品图' : '参考场景图');
          if (slotMatch) {
            const slot = state.customSetSlots[Number(slotMatch[1])];
            slot.dataUrl = dataUrl;
            slot.uploadMessage = optimized ? `已在本机自动优化传输副本（原图 ${(file.size / 1024 / 1024).toFixed(1)}MB 未修改）` : '原图已载入；仅用于当前任务';
          } else {
            state[input.dataset.customUpload] = dataUrl;
            state[isProduct ? 'customProductUploadMessage' : 'customSceneUploadMessage'] = optimized
            ? `已在本机自动优化传输副本（原图 ${(file.size / 1024 / 1024).toFixed(1)}MB 未修改）`
            : '原图已载入；仅用于当前任务';
          }
          state.results = []; state.structuredPlan = null; state.analysisMessage = ''; render(container);
        }
        catch (error) { alert(error.message); }
      };
      container.querySelectorAll('[data-custom-upload]').forEach(input => {
        input.onchange = () => handleCustomUpload(input, input.files?.[0]);
        studio.utils.bindFileDropZone(input.closest('.custom-upload'), file => handleCustomUpload(input, file));
      });
      container.querySelector('#customUserBrief').oninput = event => { state.userBrief = event.target.value; };
      container.querySelector('#backgroundMode').onchange = event => { state.backgroundMode = event.target.value; invalidateResults(); render(container); };
    }

    bindConfigurationControls(container, state);
    if (state.analysisTimer) clearInterval(state.analysisTimer);
    if (state.analysisRunning) {
      const updateAnalysisTime = () => {
        const status = container.querySelector('#promptAnalysisStatus');
        if (!status) return;
        const seconds = Math.max(0, Math.floor((Date.now() - state.analysisStartedAt) / 1000));
        status.textContent = `${state.analysisMessage} 已等待 ${seconds} 秒（场景分析最长约25秒）。`;
      };
      updateAnalysisTime();
      state.analysisTimer = setInterval(updateAnalysisTime, 1000);
    }
    const cancelAnalysis = container.querySelector('#cancelPromptAnalysis');
    if (cancelAnalysis) cancelAnalysis.onclick = () => {
      cancelAnalysis.disabled = true;
      state.analysisMessage = '正在取消场景分析；随后会使用70/30基础规则继续生成提示词。';
      state.analysisAbortController?.abort();
    };
    container.querySelectorAll('[data-generation-mode]').forEach(button => button.onclick = () => { state.mode = button.dataset.generationMode; invalidateResults(); render(container); });
    const countInput = container.querySelector('#promptCount');
    if (countInput) countInput.onchange = event => { state.count = studio.utils.clamp(event.target.value || 2, 2, 5); invalidateResults(); render(container); };
    const promptRatio = container.querySelector('#promptRatio');
    if (promptRatio) promptRatio.onchange = event => { state.ratio = event.target.value; invalidateResults(); render(container); };
    const referenceToggle = container.querySelector('#toggleReferenceSelector');
    if (referenceToggle) referenceToggle.onclick = () => { state.selectorOpen = !state.selectorOpen; render(container); };
    container.querySelectorAll('[data-selector-tab]').forEach(button => button.onclick = () => { state.selectorTab = button.dataset.selectorTab; render(container); });
    container.querySelectorAll('[data-page]').forEach(button => button.onclick = () => { const [kind, direction] = button.dataset.page.split('-'); state[kind + 'Page'] += direction === 'next' ? 1 : -1; render(container); });
    container.querySelectorAll('[data-prompt-filter]').forEach(select => select.onchange = () => { state.filters[select.dataset.promptFilter] = select.value; state.scenePage = 0; if (select.dataset.promptFilter === 'format' && select.value !== '细节展示') state.filters.detailTag = '全部'; render(container); });
    container.querySelectorAll('[data-scene]').forEach(card => card.onclick = () => { const already = state.selectedSceneIds.has(card.dataset.scene); state.selectedSceneIds.clear(); if (!already) { state.selectedSceneIds.add(card.dataset.scene); autoSelectPropForScene(studio.state.materials.find(item => item.id === card.dataset.scene)); } invalidateResults(); render(container); });
    const propCategory = container.querySelector('#propCategorySelect');
    if (propCategory) propCategory.onchange = () => { state.propCategory = propCategory.value; state.propPage = 0; render(container); };
    container.querySelectorAll('[data-prop]').forEach(card => card.onclick = () => { state.autoSelectedPropIds.forEach(id => state.selectedPropIds.delete(id)); state.autoSelectedPropIds.clear(); state.selectedPropIds.has(card.dataset.prop) ? state.selectedPropIds.delete(card.dataset.prop) : state.selectedPropIds.add(card.dataset.prop); invalidateResults(); render(container); });
    container.querySelector('#clearPromptWorkspace').onclick = () => { state.selectedSceneIds.clear(); state.selectedPropIds.clear(); state.autoSelectedPropIds.clear(); state.results = []; state.selectionPlan = null; state.structuredPlan = null; if (state.sourceMode === 'custom') { state.customProductDataUrl = ''; state.customSceneDataUrl = ''; state.customProductUploadMessage = ''; state.customSceneUploadMessage = ''; state.customProductAssetId = ''; state.customSceneId = ''; state.userBrief = ''; } state.analysisMessage = ''; clearGeneratedImages(); render(container); };
    container.querySelector('#buildPrompts').onclick = async () => {
      if (state.sourceMode === 'custom') {
        try { state.analysisRunning = true; state.analysisMessage = '正在准备产品与场景关系…'; render(container); await customStructuredPlan(state); } catch (error) { alert(error.message); } finally { state.analysisRunning = false; render(container); }
        return;
      }
      if (!state.selectedSceneIds.size) return alert('请先选择一张场景参考素材');
      state.analysisRunning = true;
      state.analysisAbortController = new AbortController();
      state.analysisStartedAt = Date.now();
      clearGeneratedImages();
      render(container);
      try {
        await buildResults();
      } catch (error) {
        state.analysisMessage = `提示词准备失败：${error.message}`;
      } finally {
        state.analysisRunning = false;
        state.analysisAbortController = null;
        state.analysisStartedAt = 0;
        if (state.analysisTimer) clearInterval(state.analysisTimer);
        state.analysisTimer = null;
        render(container);
      }
    };

    container.querySelectorAll('[data-result]').forEach(card => {
      const result = state.results.find(candidate => candidate.key === card.dataset.result);
      const area = card.querySelector('textarea');
      card.querySelector('[data-expand-prompt]').onclick = event => { const expanded = area.classList.toggle('expanded'); event.currentTarget.textContent = expanded ? '收起全文' : '展开全文'; };
      area.oninput = () => { result.text = area.value; savePromptText(result.key, result.text); clearGeneratedImages(); };
      card.querySelector('[data-copy]').onclick = () => copyText(area.value);
      card.querySelector('[data-restore]').onclick = () => { result.text = result.prompt; savePromptText(result.key, result.prompt); clearGeneratedImages(); render(container); };
    });
    const applyGlobal = container.querySelector('#applyGlobalEdit');
    if (applyGlobal) applyGlobal.onclick = () => { const extra = container.querySelector('#globalPromptEdit').value.trim(); if (!extra) return; state.results.forEach(result => { result.text = `${result.text}\n${extra}`; savePromptText(result.key, result.text); }); clearGeneratedImages(); render(container); };
    const copyAll = container.querySelector('#copyAllPrompts');
    if (copyAll) copyAll.onclick = () => copyText(state.results.map((result, index) => `# ${index + 1} ${result.item.id}\n${result.text}`).join('\n\n'));
    studio.features.generation.render(container.querySelector('#generationMount'), { embedded: true });
  }

  studio.features.promptWorkspace = { initialize, render, invalidateResults };
})(globalThis.BayerStudio);


(function registerGenerationFeature(studio) {
  'use strict';

  const issueTags = ['产品还原不准', '产品比例不准', '构图偏差', '风格不一致', '手部异常', '文字错误', '容器不真实', '其他'];

  function initialize() {
    studio.state.generation = {
      resultIndex: 0,
      quality: 'medium',
      running: false,
      abortController: null,
      waitStartedAt: 0,
      waitTimer: null,
      reviewing: false,
      message: '',
      health: null,
      images: [],
      failedResults: [],
      setWorkflow: 'conversation',
      setPhase: 'idle',
      setAnchorDataUrl: '',
      setCleanPlateRequestId: '',
      setPlateResponseId: '',
      setPlateValidation: null,
      setValidationResponseId: '',
      setValidationIndex: -1,
      setId: '',
      setMaskDataUrl: '',
      setHandAnchorDataUrl: '',
      historyWarning: '',
      reviewDrafts: {},
      qaDrafts: {},
      revisionDrafts: {}
    };
  }

  function healthMarkup(health) {
    if (!health) return '<span class="generation-status neutral">尚未检测服务端</span>';
    if (!health.ok) return `<span class="generation-status error">${studio.utils.escapeHtml(health.error || '服务端不可用')}</span>`;
    const statuses = [
      health.localGenerationMock ? '本地主流程模拟（零费用）' : '',
      health.versionWarning ? health.versionWarning : '',
      health.geminiConfigured ? 'Gemini 已配置' : 'Gemini 未配置',
      health.openaiConfigured ? 'GPT Image 已配置' : 'GPT Image 未配置',
      health.quotaConfigured ? '额度存储已配置' : '额度存储未配置',
      health.atomicQuotaConfigured ? '原子额度已配置' : '原子额度未配置',
      health.publicAiEnabled ? 'AI 已启用' : 'AI 安全关闭',
      health.accessControlConfigured ? '口令会话已配置' : '口令会话未配置',
      health.reviewConfigured ? '历史评审已配置' : '历史评审未配置'
    ].filter(Boolean);
    const ready = infrastructureReady(health);
    return `<span class="generation-status ${ready ? (health.reviewConfigured ? 'ready' : 'warning') : 'warning'}">${statuses.join(' · ')}</span>`;
  }

  function infrastructureReady(health) {
    const aiSafetyReady = health.localGenerationMock || (
      health.publicAiEnabled && health.accessControlConfigured && health.atomicQuotaConfigured
    );
    return Boolean(health.ok && health.geminiConfigured && health.openaiConfigured && health.quotaConfigured && aiSafetyReady);
  }

  function stopWaiting(state) {
    if (state.waitTimer) clearInterval(state.waitTimer);
    state.waitTimer = null;
    state.waitStartedAt = 0;
    state.abortController = null;
  }

  function startWaiting(state, container) {
    if (state.waitTimer) clearInterval(state.waitTimer);
    if (!state.running) return;
    if (!state.waitStartedAt) state.waitStartedAt = Date.now();
    const update = () => {
      const status = container.querySelector('#generationStatus');
      if (!status) return;
      const seconds = Math.max(0, Math.floor((Date.now() - state.waitStartedAt) / 1000));
      status.textContent = `${state.message} 当前步骤已等待 ${seconds} 秒（本步骤最长约180秒）。`;
    };
    update();
    state.waitTimer = setInterval(update, 1000);
  }

  function allReferences(result) {
    return [
      { image: result.sourceItem?.image || result.item.image, label: `场景 · ${result.sourceItem?.id || result.item.id}` },
      { image: result.productReference.image, label: `唯一产品 · ${result.productReference.label}` },
      ...(result.productReference.proportionReference ? [{ image: result.productReference.proportionReference.image, label: result.productReference.proportionReference.label }] : []),
      ...(result.productReference.additionalReferences || []),
      ...result.selectedProps.map(prop => ({ image: prop.image, label: `道具 · ${prop.label}` }))
    ];
  }

  function imageDataUrl(image) {
    return `data:${image.mimeType || 'image/jpeg'};base64,${image.b64Json}`;
  }

  function reviewMarkup(image) {
    const draft = studio.state.generation.reviewDrafts[image.id] || { rating: image.review?.rating || 0, tags: image.review?.tags || [], note: image.review?.note || '' };
    if (image.review?.synced) return `<div class="review-complete"><b>已评分 ${image.review.rating}/5</b><span>${studio.utils.escapeHtml((image.review.tags || []).join('、') || '无问题标签')}</span></div>`;
    return `<div class="review-box" data-review-box="${image.id}"><b>${image.historySync === 'synced' ? '待评分' : '等待同步'}</b><div class="rating-row" aria-label="1到5分">${[1,2,3,4,5].map(value => `<button class="rating-button ${draft.rating === value ? 'active' : ''}" data-rating="${value}" type="button">${value}</button>`).join('')}<span>分</span></div><div class="review-tags">${issueTags.map(tag => `<label><input type="checkbox" value="${tag}"${draft.tags.includes(tag) ? ' checked' : ''}>${tag}</label>`).join('')}</div><textarea rows="2" placeholder="可选：填写修改意见">${studio.utils.escapeHtml(draft.note)}</textarea><button class="action primary" data-submit-review="${image.id}" ${studio.state.generation.reviewing ? 'disabled' : ''}>保存评分</button></div>`;
  }

  function qaMarkup(image) {
    const items = studio.services.assetPlanner.outputQaItems;
    const draft = studio.state.generation.qaDrafts[image.id] || {};
    const status = image.qaReview?.status;
    const statusText = status === 'approved' ? '质量验收通过' : (status === 'rejected' ? '已标记为未通过（图片仍保留在历史）' : '待人工质量验收');
    return `<div class="qa-box ${status || 'pending'}" data-qa-box="${image.id}"><div class="qa-title"><b>${statusText}</b></div><div class="qa-checks">${items.map(item => `<label><input type="checkbox" value="${item.id}"${draft[item.id] ? ' checked' : ''}><span><b>${item.label}</b><small>${item.detail}</small></span></label>`).join('')}</div><button class="action" data-submit-qa="${image.id}" ${studio.state.generation.reviewing ? 'disabled' : ''}>保存验收</button></div>`;
  }

  function imageMarkup(image, index) {
    const src = imageDataUrl(image);
    const extension = (image.mimeType || '').includes('png') ? 'png' : 'jpg';
    const sourceLabel = image.mock ? '预览图' : 'AI 生成';
    const actions = image.mock
      ? '<span class="generation-status warning">仅供预览</span>'
      : `<button class="action" type="button" data-regenerate-result="${image.id}">不满意，重新生成此镜头（1张）</button><a class="action" href="${src}" download="bayer-shiguang-${image.id}.${extension}">下载原图</a>`;
    const revision = image.mock ? '' : `<div class="revision-box"><label><b>继续修改这张图</b><textarea rows="2" data-revision-feedback="${image.id}" placeholder="例如：产品再大一些，保持包装不变；背景更像户外绿植环境。">${studio.utils.escapeHtml(studio.state.generation.revisionDrafts[image.id] || '')}</textarea></label><button class="action primary" type="button" data-revise-result="${image.id}">按意见修改（1张）</button></div>`;
    const evaluation = image.mock ? '' : `${qaMarkup(image)}${reviewMarkup(image)}`;
    return `<figure class="generated-card${image.mock ? ' mock-result' : ''}" data-generated-id="${image.id}"><img src="${src}" alt="${image.mock ? '本地流程占位图' : `生成结果 ${index + 1}`}"><figcaption><div><b>${studio.utils.escapeHtml(image.label || `生成结果 ${index + 1}`)}${image.version > 1 ? ` · v${image.version}` : ''}</b><span>${studio.utils.escapeHtml(image.config?.combo || '')} · ${studio.utils.escapeHtml(image.config?.presentation || '')} · ${sourceLabel}</span></div><div>${actions}</div></figcaption>${revision}${evaluation}</figure>`;
  }

  function generatedImages(payload, result, resultIndex, state, metadata = {}) {
    return payload.images.map((image, imageIndex) => ({
      ...image,
      id: globalThis.crypto?.randomUUID?.() || `image-${Date.now()}-${resultIndex}-${imageIndex}`,
      label: result.mode === 'set' ? `套图镜头 ${resultIndex + 1}` : `方案 ${resultIndex + 1}`,
      resultKey: result.key,
      prompt: result.text,
      config: result.config,
      mode: result.mode,
      sceneId: result.sourceItem?.id || result.item.id,
      references: payload.request?.references || [],
      requestId: payload.request?.requestId || payload.requestId || '',
      model: payload.model || state.health?.openaiModel || 'gpt-image-2',
      mock: Boolean(payload.mock),
      quality: state.quality,
      createdAt: new Date().toISOString(),
      setId: metadata.setId || state.setId || '',
      parentImageId: metadata.parentImageId || '',
      version: Math.max(1, Number(metadata.version) || 1),
      brandId: result.brandId || '',
      productId: result.productId || '',
      skuId: result.skuId || '',
      generationSource: result.generationSource || ''
    }));
  }

  function historyRecord(image, review = {}) {
    const promptState = studio.state.prompt || {};
    return {
      id: image.id,
      rating: Number(review.rating) || 0,
      tags: review.tags || [],
      note: review.note || '',
      prompt: image.prompt,
      combo: image.config?.combo || '',
      presentation: image.config?.presentation || '',
      visualStyle: image.config?.visualStyle || '',
      tabletSupport: image.config?.tabletSupport || '',
      blisterState: image.config?.blisterState || '',
      mode: image.mode,
      brandId: image.brandId || (promptState.sourceMode === 'custom' ? 'custom' : (promptState.brandId || 'bayer')),
      productId: image.productId || (promptState.sourceMode === 'custom' ? 'custom-upload' : (promptState.productId || 'shiguang')),
      skuId: image.skuId || (promptState.sourceMode === 'custom' ? 'custom-upload' : (promptState.skuId || 'bayer-shiguang-default')),
      generationSource: image.generationSource || (promptState.sourceMode === 'custom' ? 'manual-upload' : 'library-smart'),
      sceneId: image.sceneId,
      model: image.model,
      quality: image.quality,
      references: image.references,
      setId: image.setId || '',
      parentImageId: image.parentImageId || '',
      version: image.version || 1,
      qaStatus: image.qaReview?.status || 'pending',
      qaPassed: image.qaReview?.passed || [],
      qaFailed: image.qaReview?.failed || [],
      createdAt: image.createdAt,
      imageDataUrl: imageDataUrl(image)
    };
  }

  function invalidateHistoryCache() {
    if (studio.state.history) studio.state.history.attempted = false;
  }

  async function archiveGenerated(images, state) {
    const realImages = images.filter(image => !image.mock);
    images.filter(image => image.mock).forEach(image => { image.historySync = 'mock'; });
    if (!realImages.length) return;
    const outcomes = await Promise.all(realImages.map(async image => {
      try {
        await studio.services.reviewHistory.save(historyRecord(image));
        image.historySync = 'synced';
        return { ok: true, error: '' };
      } catch (error) {
        image.historySync = 'pending';
        return { ok: false, error: error.message || '未知同步错误' };
      }
    }));
    if (outcomes.some(outcome => outcome.ok)) invalidateHistoryCache();
    const failures = outcomes.filter(outcome => !outcome.ok);
    if (failures.length) state.historyWarning = `有 ${failures.length} 张尚未进入历史：${[...new Set(failures.map(outcome => outcome.error))].join('；')}。请保持当前页面打开，修复后可再次同步。`;
  }

  function failureControls(state) {
    if (!state.failedResults.length || state.running) return '';
    return `<div class="generation-retry">${state.failedResults.map(failure => `<button class="action" type="button" data-retry-generation="${failure.index}">只重试镜头 ${failure.index + 1}</button>`).join('')}<small>失败镜头不会自动重试，避免重复扣费；请确认后手动点击一次。</small></div>`;
  }

  function plateValidationMarkup(state) {
    const validation = state.setPlateValidation;
    if (!validation) return '';
    if (validation.status === 'unavailable') return `<div class="generation-status warning"><b>自动视觉质检未完成</b>：${studio.utils.escapeHtml(validation.summary || '请人工检查环境密度、至少两组道具及自然融合。')} <button class="action" id="approveCleanPlateManually" type="button">人工确认母版合格</button></div>`;
    const details = (validation.issues || []).join('；') || validation.summary || '未提供具体问题';
    return `<div class="generation-status ${validation.pass ? 'ready' : 'error'}"><b>${validation.pass ? '自动视觉质检通过' : '自动视觉质检未通过'}</b> · 道具组 ${validation.propGroupsDetected || 0} · ${studio.utils.escapeHtml(validation.pass ? (validation.summary || '环境密度、道具融合和产品预留区符合要求。') : details)}</div>`;
  }

  function resetSetSession(state, { clearImages = true } = {}) {
    if (clearImages) state.images = [];
    state.failedResults = [];
    state.setAnchorDataUrl = '';
    state.setCleanPlateRequestId = '';
    state.setPlateResponseId = '';
    state.setPlateValidation = null;
    state.setValidationResponseId = '';
    state.setValidationIndex = -1;
    state.setId = '';
    state.setMaskDataUrl = '';
    state.setHandAnchorDataUrl = '';
    state.setPhase = 'idle';
  }

  function render(container, options = {}) {
    const state = studio.state.generation;
    const results = studio.state.prompt.results || [];
    state.resultIndex = Math.min(state.resultIndex, Math.max(0, results.length - 1));
    const selected = results[state.resultIndex];
    const preflightReady = results.length > 0 && results.every(result => result.preflight?.status === 'ready');
    const optionsMarkup = results.map((result, index) => `<option value="${index}"${index === state.resultIndex ? ' selected' : ''}>${result.mode === 'set' ? `套图镜头 ${index + 1}` : `方案 ${index + 1}`} · ${studio.utils.escapeHtml(result.config.combo)}</option>`).join('');
    const references = selected ? allReferences(selected) : [];
    const title = options.embedded ? '<div class="section-kicker">下一步 · 确认提示词后生图</div>' : '<header class="page-head"><div class="eyebrow">IMAGE GENERATION</div><h1>图片生成</h1></header>';
    const isSet = results.length > 0 && results.every(result => result.mode === 'set');
    const conversationalSet = isSet && state.setWorkflow === 'conversation';
    const batchLabel = conversationalSet
      ? (state.setPhase === 'complete'
          ? '本套已完成'
          : state.setPhase === 'awaiting_validation'
          ? `继续生成剩余 ${Math.max(0, results.length - state.images.length)} 张`
          : (state.setPhase === 'plate_ready' ? '继续生成手持验证图（1张）' : (state.setPhase === 'plate_rejected' ? '母版未通过，请先重生' : (state.setPhase === 'plate_review_required' ? '请先人工确认母版' : '先生成并验收环境母版（1张）'))))
      : (isSet ? `旧版：生成干净底图＋${results.length}个镜头（共${results.length + 1}张）` : (results.length > 1 ? `按顺序生成全部 ${results.length} 个镜头` : '开始生成图片'));
    const singleGenerationHint = selected?.custom
      ? '生成时只读取当前所选产品图与参考图，不会自动加入其他产品或包装。'
      : '生成前会自动读取45°产品比例基准。';

    container.innerHTML = `${title}<section class="generation-panel">
      ${selected ? `<div class="generation-controls compact"><label>生图质量<select id="generationQuality"><option value="medium"${state.quality === 'medium' ? ' selected' : ''}>测试 medium</option><option value="high"${state.quality === 'high' ? ' selected' : ''}>成片 high</option></select></label>${results.length > 1 ? `<label>当前方案<select id="generationResult">${optionsMarkup}</select></label>` : '<select id="generationResult" hidden><option value="0">1</option></select>'}${isSet ? `<label>套图生成链路<select id="setWorkflow"><option value="conversation"${state.setWorkflow === 'conversation' ? ' selected' : ''}>多轮套图 Beta（推荐）</option><option value="legacy"${state.setWorkflow === 'legacy' ? ' selected' : ''}>旧版遮罩回退</option></select></label>` : ''}</div>
        <div class="generation-status ${preflightReady ? 'ready' : 'error'}"><b>${preflightReady ? '已准备' : '请完成选材'}</b></div>
        <div class="generation-references">${references.map(reference => `<figure><img src="${encodeURI(reference.image)}" alt="${studio.utils.escapeHtml(reference.label)}"><figcaption>${studio.utils.escapeHtml(reference.label)}</figcaption></figure>`).join('')}</div>
        <details class="advanced-panel"><summary>高级设置 · 接口状态与完整提示词</summary><div class="advanced-panel-body"><div class="generation-health"><div>${healthMarkup(state.health)}</div><button class="action" id="checkGenerationHealth" ${state.running ? 'disabled' : ''}>检测接口</button></div><label class="generation-prompt"><b>当前镜头生图提示词</b><textarea id="generationPrompt" rows="10">${studio.utils.escapeHtml(selected.text)}</textarea></label></div></details>
        <div class="generation-submit"><span id="generationStatus">${studio.utils.escapeHtml(state.message || (conversationalSet ? '先生成并确认背景。' : (isSet ? `准备生成 ${results.length} 张套图。` : singleGenerationHint)))}</span><button class="action primary" id="startGeneration" ${state.running || !preflightReady || (conversationalSet && ['complete', 'plate_rejected', 'plate_review_required'].includes(state.setPhase)) ? 'disabled' : ''}>${state.running ? '正在生成…' : batchLabel}</button>${conversationalSet && state.setPhase === 'complete' ? '<button class="action" id="newSetKeepSettings" type="button">新建套图</button>' : ''}${state.running ? '<button class="action" id="cancelGeneration" type="button">取消</button>' : ''}${failureControls(state)}</div>`
        : `<div class="generation-empty"><h2>请先完成上方4步</h2><p>选好产品图和参考图后，点击“准备生图”。</p><details class="advanced-panel"><summary>高级设置 · 接口状态</summary><div class="advanced-panel-body"><div class="generation-health"><div>${healthMarkup(state.health)}</div><button class="action" id="checkGenerationHealth" ${state.running ? 'disabled' : ''}>检测接口</button></div></div></details></div>`}
      </section>${state.setAnchorDataUrl ? `<details class="generation-panel" open><summary>确认套图背景</summary>${plateValidationMarkup(state)}<figure class="generated-card"><img src="${state.setAnchorDataUrl}" alt="套图背景"><figcaption><div><b>套图背景</b></div><div>${conversationalSet ? `<button class="action" type="button" id="regenerateCleanPlate" ${state.running ? 'disabled' : ''}>重新生成</button>` : ''}<a class="action" href="${state.setAnchorDataUrl}" download="bayer-shiguang-clean-plate.png">下载</a></div></figcaption></figure></details>` : ''}${state.images.length ? `<section class="generation-results"><div class="history-heading"><div><h2>生成结果</h2></div></div><div class="generated-grid">${state.images.map(imageMarkup).join('')}</div></section>` : ''}`;

    startWaiting(state, container);
    const cancelButton = container.querySelector('#cancelGeneration');
    if (cancelButton) cancelButton.onclick = () => {
      cancelButton.disabled = true;
      state.message = '正在取消浏览器等待；服务端可能仍在处理，请勿立即重复提交。';
      state.abortController?.abort();
    };

    container.querySelector('#checkGenerationHealth').onclick = async () => {
      state.message = '正在检测服务端配置…';
      state.health = await studio.services.sceneAnalysis.health();
      state.message = state.health.ok ? '接口检测完成。' : (state.health.error || '接口检测失败。');
      render(container, options);
    };
    if (!selected) return;
    const newSetButton = container.querySelector('#newSetKeepSettings');
    if (newSetButton) newSetButton.onclick = () => {
      resetSetSession(state);
      state.message = '已新建空白套图；镜头类型、比例、质量、场景和道具候选均已保留，可直接更换参考或生成新母版。';
      render(container, options);
    };
    const manualApprovalButton = container.querySelector('#approveCleanPlateManually');
    if (manualApprovalButton) manualApprovalButton.onclick = () => {
      state.setPlateValidation = { ...state.setPlateValidation, status: 'manual', pass: true, summary: '已由用户人工确认母版合格。' };
      state.setPhase = 'plate_ready';
      state.message = '已人工确认环境母版；下一步只生成1张手持验证图。';
      render(container, options);
    };
    container.querySelector('#generationResult').onchange = event => { state.resultIndex = Number(event.target.value); state.message = ''; render(container, options); };
    container.querySelector('#generationQuality').onchange = event => { state.quality = event.target.value; render(container, options); };
    if (isSet) container.querySelector('#setWorkflow').onchange = event => {
      state.setWorkflow = event.target.value;
      state.setPhase = 'idle';
      state.images = [];
      state.failedResults = [];
      state.setAnchorDataUrl = '';
      state.setCleanPlateRequestId = '';
      state.setPlateResponseId = '';
      state.setPlateValidation = null;
      state.setValidationResponseId = '';
      state.setValidationIndex = -1;
      state.setId = '';
      state.setHandAnchorDataUrl = '';
      state.message = state.setWorkflow === 'conversation' ? '已切换多轮套图 Beta；第一步只生成1张环境母版，验收后再继续正式镜头。' : '已切换旧版遮罩回退链路。';
      render(container, options);
    };
    container.querySelector('#generationPrompt').oninput = event => {
      selected.text = event.target.value;
      resetSetSession(state);
    };

    async function generateResult(result, index, parentImage = null, feedback = '') {
      const setLock = result.mode === 'set'
        ? await studio.services.imageGeneration.createSetLock(state.setAnchorDataUrl, result)
        : null;
      if (setLock) state.setMaskDataUrl = setLock.maskDataUrl;
      const revisedResult = feedback ? { ...result, text: `${result.text}\n\n基于上一轮结果继续修改：${feedback}\n必须继续以原产品图为唯一身份依据，禁止改变包装文字、Logo、图形布局与产品形态。` } : result;
      const payload = await studio.services.imageGeneration.generate(revisedResult, {
        count: 1,
        quality: state.quality,
        ratio: studio.state.prompt.ratio,
        setAnchorDataUrl: setLock?.anchorDataUrl || '',
        setMaskDataUrl: setLock?.maskDataUrl || '',
        setHandAnchorDataUrl: result.mode === 'set' && index > 0 && result.config?.presentation === '手持' ? state.setHandAnchorDataUrl : '',
        previousImageDataUrl: feedback && parentImage ? imageDataUrl(parentImage) : '',
        signal: state.abortController?.signal
      });
      const generated = generatedImages(payload, revisedResult, index, state, {
        parentImageId: parentImage?.id || '',
        version: (parentImage?.version || 0) + 1
      });
      state.images = state.images.filter(image => image.resultKey !== result.key);
      state.images.push(...generated);
      state.images.sort((left, right) => results.findIndex(resultItem => resultItem.key === left.resultKey) - results.findIndex(resultItem => resultItem.key === right.resultKey));
      if (result.mode === 'set' && result.config?.presentation === '手持' && !state.setHandAnchorDataUrl && generated[0]) {
        state.setHandAnchorDataUrl = imageDataUrl(generated[0]);
      }
      await archiveGenerated(generated, state);
      return generated.length;
    }

    function cleanPlatePrompt(result) {
      const fingerprint = result.sceneFingerprint ? studio.services.sceneAnalysis.promptGuide(result.sceneFingerprint) : '';
      const exactBackground = result.structuredPlan?.backgroundMode === 'exact' || studio.state.prompt.backgroundMode === 'exact';
      const requiredProps = Math.min(2, result.selectedProps.length);
      const props = result.selectedProps.length
        ? `道具候选池仅限：${result.selectedProps.map(prop => prop.label).join('、')}。必须从不同候选图中自然采用${requiredProps}组，组成2至3个有使用逻辑的小组合，无需全部出现。场景参考中原本可识别的普通生活物件是环境基线，保留其类别、数量级、疏密和空间作用；候选道具可替换或补充适配位置，但禁止新增环境基线与候选池以外的物件类别。禁止用同类替代品或其他品牌替换。道具须分布在侧边、前后景、收纳面或托盘等真实使用位置，并形成符合光向的接触阴影、遮挡和尺度关系；禁止单件居中孤立、正面广告式展示或标签刻意朝向镜头。`
        : '没有额外道具候选时，保留场景参考中已经存在且可识别的普通生活物件类别、数量级与疏密；禁止新增参考图中不存在的物件类别、品牌物品或用途不明物体。';
      const backgroundInstruction = exactBackground
        ? '客户要求优先：严格复刻参考图背景，保持完全相同的机位、裁切、空间分区、物件类别与数量、摆放、材质、光线、景深和生活痕迹；禁止主动增减、替换或重排背景元素。'
        : '场景执行约70%视觉基因保留、约30%画面重构：保留场景用途、整体色调、光线方向与软硬、材质气质、生活感/精致感/素人感、空间层次和真实摄影质感；允许改变景别、焦距感、相机距离、适度机位高度、裁切、产品位置和局部家具布局，至少产生三处一眼可见的差异。产品必须是第一视觉落点和最清晰区域，主体组合约占画面28%至45%，禁止只在原图上缩小粘贴产品。';
      const supportInstruction = exactBackground
        ? '只需在原产品位置附近形成可用承托区，禁止为了后续产品清空大半桌面或画面。'
        : '只需在中央或下部形成约25%至35%的分散可用承托区，禁止为了后续产品清空大半桌面。';
      return `生成一张真实居家产品摄影的“产品就绪生活环境母版”，它不是空棚、空桌或极简背景。${backgroundInstruction}${exactBackground ? '' : props}不得出现来源参考图中的原产品、手或人物。彻底移除原产品及残影，用连续自然的环境纹理补全。${supportInstruction}环境细节密度和层次必须达到普通单张生活方式摄影的水平。保持真实透视、自然阴影、统一曝光和高清细节，不添加花字、水印、边框或广告排版。${fingerprint ? `场景结构指纹仅用于环境基线：${fingerprint}` : ''}图片比例为${studio.state.prompt.ratio}。`;
    }

    async function archiveCleanPlate(image, result, requestId, mock = false) {
      const references = studio.services.imageGeneration.referencesFor(result, { cleanPlate: true });
      const [record] = generatedImages({ images: [image], requestId, mock, request: { requestId, references } }, result, -1, state);
      record.label = '环境母版';
      record.resultKey = `${result.key}:clean-plate`;
      record.mode = 'set-plate';
      record.config = { ...result.config, combo: '无产品环境母版', presentation: '环境母版' };
      await archiveGenerated([record], state);
    }

    async function generateCleanPlate(result) {
      const plateResult = { ...result, text: cleanPlatePrompt(result) };
      const payload = await studio.services.imageGeneration.generate(plateResult, {
        count: 1,
        quality: state.quality,
        ratio: studio.state.prompt.ratio,
        cleanPlate: true,
        signal: state.abortController?.signal
      });
      const image = payload.images[0];
      state.setAnchorDataUrl = imageDataUrl(image);
      state.setCleanPlateRequestId = payload.request?.requestId || payload.requestId || '';
      state.setMaskDataUrl = '';
      await archiveCleanPlate(image, result, state.setCleanPlateRequestId, payload.mock);
      return 1;
    }

    function validationIndex() {
      const detailedHand = results.findIndex(result => result.config?.presentation === '手持' && /药片|药板/.test(result.config?.combo || ''));
      if (detailedHand >= 0) return detailedHand;
      const anyHand = results.findIndex(result => result.config?.presentation === '手持');
      return anyHand >= 0 ? anyHand : 0;
    }

    function conversationalImages(payload, requestedJobs) {
      return payload.results.map((entry, payloadIndex) => {
        const requested = requestedJobs.find(job => job.result.key === entry.key) || requestedJobs[payloadIndex];
        const result = requested.result;
        const index = results.findIndex(candidate => candidate.key === result.key);
        const references = studio.services.imageGeneration.referencesFor(result, { hasSetAnchor: true });
        const generated = generatedImages({
          images: [entry.image],
          mock: payload.mock,
          requestId: payload.requestId,
          request: { requestId: payload.requestId, references }
        }, result, index, state, requested.metadata || {})[0];
        generated.responseId = entry.responseId || '';
        generated.responsesModel = entry.responsesModel || '';
        return generated;
      });
    }

    async function generateConversationalPlate() {
      const result = results[0];
      const plateResult = { ...result, text: cleanPlatePrompt(result) };
      const payload = await studio.services.imageGeneration.generateConversationJobs([{ result: plateResult, mode: 'plate' }], {
        quality: state.quality,
        ratio: studio.state.prompt.ratio,
        signal: state.abortController?.signal
      });
      const entry = payload.results[0];
      state.setAnchorDataUrl = imageDataUrl(entry.image);
      state.setCleanPlateRequestId = payload.requestId || '';
      state.setPlateResponseId = entry.responseId || '';
      if (!state.setPlateResponseId) throw new Error('多轮母版缺少对话响应编号，已停止正式镜头');
      await archiveCleanPlate(entry.image, result, state.setCleanPlateRequestId, payload.mock);
      state.message = '环境母版已生成并进入历史，正在执行零生图额度的视觉质检…';
      render(container, options);
      try {
        state.setPlateValidation = await studio.services.sceneAnalysis.validateCleanPlate({
          imageDataUrl: state.setAnchorDataUrl,
          sourceItem: result.sourceItem || result.item,
          selectedProps: result.selectedProps,
          signal: state.abortController?.signal
        });
        state.setPhase = state.setPlateValidation.pass ? 'plate_ready' : 'plate_rejected';
      } catch (error) {
        state.setPlateValidation = { status: 'unavailable', pass: false, issues: [], summary: error.message };
        state.setPhase = 'plate_review_required';
      }
    }

    async function generateConversationalValidation() {
      const index = validationIndex();
      const result = results[index];
      const jobs = [{ result, mode: 'shot', previousResponseId: state.setPlateResponseId }];
      const payload = await studio.services.imageGeneration.generateConversationJobs(jobs, {
        quality: state.quality,
        ratio: studio.state.prompt.ratio,
        setAnchorDataUrl: state.setAnchorDataUrl,
        signal: state.abortController?.signal
      });
      const generated = conversationalImages(payload, jobs);
      const image = generated[0];
      state.images = [image];
      state.setValidationIndex = index;
      state.setValidationResponseId = image.responseId || '';
      state.setHandAnchorDataUrl = imageDataUrl(image);
      await archiveGenerated(generated, state);
    }

    async function generateConversationalRemainder() {
      const existingKeys = new Set(state.images.map(image => image.resultKey));
      const jobs = results
        .map((result, index) => ({ result, index }))
        .filter(item => item.index !== state.setValidationIndex && !existingKeys.has(item.result.key))
        .map(item => ({
          result: item.result,
          mode: 'shot',
          previousResponseId: item.result.config?.presentation === '手持' ? state.setValidationResponseId : state.setPlateResponseId,
          handAnchorDataUrl: item.result.config?.presentation === '手持' ? state.setHandAnchorDataUrl : ''
        }));
      const payload = await studio.services.imageGeneration.generateConversationJobs(jobs, {
        quality: state.quality,
        ratio: studio.state.prompt.ratio,
        setAnchorDataUrl: state.setAnchorDataUrl,
        signal: state.abortController?.signal
      });
      const generated = conversationalImages(payload, jobs);
      state.images.push(...generated);
      state.images.sort((left, right) => results.findIndex(result => result.key === left.resultKey) - results.findIndex(result => result.key === right.resultKey));
      await archiveGenerated(generated, state);
      const failures = (payload.failures || []).map(failure => {
        const resultIndex = results.findIndex(result => result.key === failure.key);
        return { index: resultIndex, message: `镜头${resultIndex + 1}：${failure.error}`, code: failure.code || '' };
      });
      return { completed: generated.length, failures };
    }

    async function generateConversationalSingle(index, parentImage = null, feedback = '') {
      const baseResult = results[index];
      const result = feedback ? { ...baseResult, text: `${baseResult.text}\n\n基于上一轮结果继续修改：${feedback}\n产品身份仍只以当前镜头产品原图为准，禁止改变包装文字、Logo、图形布局与形态。` } : baseResult;
      if (!result || !state.setAnchorDataUrl || !state.setPlateResponseId) throw new Error('套图母版或对话状态已丢失，不能单独重生');
      const handHeld = result.config?.presentation === '手持';
      const jobs = [{
        result,
        mode: 'shot',
        previousResponseId: handHeld ? (state.setValidationResponseId || state.setPlateResponseId) : state.setPlateResponseId,
        handAnchorDataUrl: handHeld ? state.setHandAnchorDataUrl : '',
        metadata: {
          parentImageId: parentImage?.id || '',
          version: (parentImage?.version || 0) + 1
        }
      }];
      const payload = await studio.services.imageGeneration.generateConversationJobs(jobs, {
        quality: state.quality,
        ratio: studio.state.prompt.ratio,
        setAnchorDataUrl: state.setAnchorDataUrl,
        signal: state.abortController?.signal
      });
      const generated = conversationalImages(payload, jobs);
      if (!generated.length) throw new Error(payload.failures?.[0]?.error || '模型未返回重生图片');
      const image = generated[0];
      state.images = state.images.filter(existing => existing.resultKey !== result.key);
      state.images.push(image);
      state.images.sort((left, right) => results.findIndex(candidate => candidate.key === left.resultKey) - results.findIndex(candidate => candidate.key === right.resultKey));
      if (handHeld && index === state.setValidationIndex) {
        state.setValidationResponseId = image.responseId || state.setValidationResponseId;
        state.setHandAnchorDataUrl = imageDataUrl(image);
      }
      await archiveGenerated(generated, state);
      return image;
    }

    function generationFailure(error, index) {
      const request = error.requestId ? ` [请求 ${error.requestId}]` : '';
      return { index, message: `镜头${index + 1}：${error.message}${request}`, code: error.code || '' };
    }

    const regeneratePlateButton = container.querySelector('#regenerateCleanPlate');
    if (regeneratePlateButton) regeneratePlateButton.onclick = async () => {
      if (!globalThis.confirm('本次只重新生成1张环境母版并消耗1张额度。成功后当前套图镜头会从页面清空，但旧图仍永久保留在共享历史；不会自动生成正式镜头。继续吗？')) return;
      state.message = '正在执行环境母版重生前的连通性与版本检查…';
      state.health = await studio.services.sceneAnalysis.health();
      const ready = infrastructureReady(state.health) && state.health.workerVersionCompatible && state.health.features?.conversationalSetBeta;
      if (!ready) {
        state.message = state.health.error || '测试 Worker 尚未通过母版重生检查；本次没有提交付费请求。';
        return render(container, options);
      }
      const snapshot = {
        setId: state.setId,
        setAnchorDataUrl: state.setAnchorDataUrl,
        setCleanPlateRequestId: state.setCleanPlateRequestId,
        setPlateResponseId: state.setPlateResponseId,
        setPlateValidation: state.setPlateValidation,
        setPhase: state.setPhase,
        images: state.images
      };
      state.running = true;
      state.abortController = new AbortController();
      state.waitStartedAt = Date.now();
      state.setId = globalThis.crypto?.randomUUID?.() || `set-${Date.now()}`;
      state.message = '正在重新生成环境母版（实际生图1张）；成功前保留当前母版和镜头…';
      render(container, options);
      try {
        await generateConversationalPlate();
        state.images = [];
        state.failedResults = [];
        state.setValidationResponseId = '';
        state.setValidationIndex = -1;
        state.setHandAnchorDataUrl = '';
        state.setMaskDataUrl = '';
        state.message = state.setPhase === 'plate_ready' ? '新环境母版已生成并通过自动视觉质检。请人工验收后再生成1张手持验证图。' : (state.setPhase === 'plate_rejected' ? '新母版已保留到历史，但自动质检未通过；正式镜头已阻断，请只重生母版。' : '新母版已保留到历史；自动质检不可用，请人工确认后再继续。');
      } catch (error) {
        Object.assign(state, snapshot);
        state.message = `${error.message}${error.requestId ? ` [请求 ${error.requestId}]` : ''}；旧母版和当前镜头已保留，系统没有自动重试。`;
      } finally {
        state.running = false;
        stopWaiting(state);
        render(container, options);
      }
    };

    container.querySelector('#startGeneration').onclick = async () => {
      if (!preflightReady) {
        state.message = '融合预检未通过；本次没有连接模型，也没有产生费用。';
        render(container, options);
        return;
      }
      const invalidPrompts = results.filter(result => !studio.prompt.validateResultPrompt(result).valid);
      if (invalidPrompts.length) {
        state.message = `有 ${invalidPrompts.length} 条提示词未通过当前硬规则校验；本次没有连接模型，也没有产生费用。请恢复自动版本或重新生成提示词。`;
        render(container, options);
        return;
      }
      state.message = '正在执行生图前连通性与版本检查…';
      state.health = await studio.services.sceneAnalysis.health();
      const setWorkerReady = !isSet || (state.health.workerVersionCompatible && (state.setWorkflow === 'conversation' ? state.health.features?.conversationalSetBeta : state.health.features?.cleanPlateSet));
      const ready = infrastructureReady(state.health) && setWorkerReady;
      if (!ready) {
        state.message = state.health.error || (!setWorkerReady ? '测试 Worker 尚未启用当前套图链路；为避免浪费额度，本次没有提交任何生图请求。' : '生图服务尚未就绪；检测通过前不会提交付费请求。');
        render(container, options);
        return;
      }
      if (conversationalSet) {
        state.running = true;
        state.abortController = new AbortController();
        state.waitStartedAt = Date.now();
        state.failedResults = [];
        state.historyWarning = '';
        if (state.setPhase === 'awaiting_validation') {
          state.message = `验证图已确认；正在并行生成剩余 ${Math.max(0, results.length - 1)} 张。已复用母版，不会再次生成母版或验证图…`;
          render(container, options);
          try {
            const outcome = await generateConversationalRemainder();
            state.setPhase = outcome.failures.length ? 'awaiting_validation' : 'complete';
            state.message = outcome.failures.length
              ? `本次新增 ${outcome.completed} 张并已保留；${outcome.failures.map(failure => failure.message).join('；')}。系统没有自动重试，点击“继续生成剩余”只会提交缺失镜头。`
              : `多轮套图完成：新增 ${outcome.completed} 张，共 ${state.images.length} 张正式镜头。母版只生成过一次；请逐张评审。${state.historyWarning ? ` ${state.historyWarning}` : ''}`;
          } catch (error) {
            state.message = `${error.message}${error.requestId ? ` [请求 ${error.requestId}]` : ''}；系统未自动重试，已保留验证图和母版。`;
          } finally {
            state.running = false;
            stopWaiting(state);
            render(container, options);
          }
          return;
        }
        if (state.setPhase === 'plate_ready') {
          state.message = '已复用刚才成功的环境母版；正在生成1张手持验证图，不会再次生成母版…';
          render(container, options);
          try {
            await generateConversationalValidation();
            state.setPhase = 'awaiting_validation';
            state.message = '验证阶段完成。请检查背景细节、产品融合、手部自然度和美甲；满意后再继续生成剩余镜头。';
          } catch (error) {
            state.setPhase = 'plate_ready';
            state.message = `${error.message}${error.requestId ? ` [请求 ${error.requestId}]` : ''}；母版已保留且不会自动重试。`;
          } finally {
            state.running = false;
            stopWaiting(state);
            render(container, options);
          }
          return;
        }
        resetSetSession(state);
        state.setId = globalThis.crypto?.randomUUID?.() || `set-${Date.now()}`;
        state.setPhase = 'building_plate';
        state.message = '正在生成唯一无产品环境母版（实际生图1张）；完成后先停下等待验收…';
        render(container, options);
        try {
          await generateConversationalPlate();
          state.message = state.setPhase === 'plate_ready' ? '环境母版已生成、进入历史并通过自动视觉质检。请人工检查后再生成手持验证图。' : (state.setPhase === 'plate_rejected' ? '母版已进入历史但自动质检未通过；已阻断正式镜头，请只重生母版。' : '母版已进入历史；自动质检不可用，请人工确认后再继续。');
        } catch (error) {
          state.setPhase = state.setPlateResponseId ? 'plate_ready' : 'idle';
          state.message = `${error.message}${error.requestId ? ` [请求 ${error.requestId}]` : ''}；已停止后续付费请求且没有自动重试。`;
        } finally {
          state.running = false;
          stopWaiting(state);
          render(container, options);
        }
        return;
      }
      state.running = true;
      state.abortController = new AbortController();
      state.waitStartedAt = Date.now();
      state.images = [];
      state.setId = isSet ? (globalThis.crypto?.randomUUID?.() || `set-${Date.now()}`) : '';
      state.failedResults = [];
      state.setAnchorDataUrl = '';
      state.setCleanPlateRequestId = '';
      state.setMaskDataUrl = '';
      state.setHandAnchorDataUrl = '';
      state.historyWarning = '';
      state.message = isSet ? `将先生成1张无产品干净底图，再提交${results.length}个正式镜头；共${results.length + 1}次实际生图，请不要关闭页面…` : `正在按顺序提交 ${results.length} 个镜头，请不要关闭页面…`;
      render(container, options);
      let completed = 0;
      const failures = [];
      if (isSet) {
        state.message = `正在生成隐藏的无产品干净底图（1/${results.length + 1}）；完成后才会提交4个正式镜头…`;
        render(container, options);
        try {
          await generateCleanPlate(results[0]);
        } catch (error) {
          failures.push({ index: -1, message: `干净底图：${error.message}${error.requestId ? ` [请求 ${error.requestId}]` : ''}` });
        }
      }
      if (failures.length) {
        state.running = false;
        stopWaiting(state);
        state.message = `${failures[0].message}；已停止正式镜头，避免在没有干净环境母版时浪费额度。`;
        render(container, options);
        return;
      }
      for (let index = 0; index < results.length; index += 1) {
        const result = results[index];
        state.message = `正在生成镜头 ${index + 1}/${results.length}；已完成 ${completed} 张。每张真实生图可能需要数分钟，请勿重复提交或关闭页面…`;
        render(container, options);
        try {
          completed += await generateResult(result, index);
        } catch (error) {
          const failure = generationFailure(error, index);
          failures.push(failure);
          state.failedResults.push(failure);
        }
      }
      state.running = false;
      stopWaiting(state);
      state.message = `${failures.length ? `已完成 ${completed} 张；${failures.map(failure => failure.message).join('；')}` : `生成完成：${completed} 张，已自动进入共享历史。请逐张进行1–5分评审。`}${state.historyWarning ? ` ${state.historyWarning}` : ''}`;
      render(container, options);
    };

    container.querySelectorAll('[data-retry-generation]').forEach(button => button.onclick = async () => {
      const index = Number(button.dataset.retryGeneration);
      const result = results[index];
      if (!result) return;
      if (result.mode === 'set' && !state.setAnchorDataUrl) {
        state.message = '无产品干净环境母版已丢失，不能单独重试正式镜头；请重新生成整套。';
        return render(container, options);
      }
      state.running = true;
      state.abortController = new AbortController();
      state.waitStartedAt = Date.now();
      state.message = `正在只重试镜头 ${index + 1}…`;
      render(container, options);
      try {
        if (conversationalSet) await generateConversationalSingle(index);
        else await generateResult(result, index);
        state.failedResults = state.failedResults.filter(failure => failure.index !== index);
        state.message = `镜头 ${index + 1} 已生成；其他已成功镜头没有重复提交。`;
      } catch (error) {
        const failure = generationFailure(error, index);
        state.failedResults = [...state.failedResults.filter(item => item.index !== index), failure];
        state.message = failure.message;
      } finally {
        state.running = false;
        stopWaiting(state);
        render(container, options);
      }
    });

    container.querySelectorAll('[data-regenerate-result]').forEach(button => button.onclick = async () => {
      const parentImage = state.images.find(image => image.id === button.dataset.regenerateResult);
      const index = results.findIndex(result => result.key === parentImage?.resultKey);
      const result = results[index];
      if (!parentImage || !result || state.running) return;
      if (!globalThis.confirm('本次只会重新生成该镜头1张并消耗1张额度。其他3张不会重生，旧图与新图都会永久进入共享历史。继续吗？')) return;
      state.message = '正在执行单张重生前的连通性与版本检查…';
      const validation = studio.prompt.validateResultPrompt(result);
      if (!validation.valid) {
        state.message = '该镜头提示词已不符合当前硬规则；本次没有提交付费生图。';
        return render(container, options);
      }
      state.health = await studio.services.sceneAnalysis.health();
      const setReady = result.mode !== 'set' || (state.health.workerVersionCompatible && (conversationalSet ? state.health.features?.singleShotRegeneration : state.health.features?.cleanPlateSet));
      const ready = infrastructureReady(state.health) && setReady;
      if (!ready) {
        state.message = state.health.error || '当前服务版本或配置未通过；本次没有提交付费生图。';
        return render(container, options);
      }
      if (result.mode === 'set' && !state.setAnchorDataUrl) {
        state.message = '无产品环境母版已丢失，不能单独重生该镜头。';
        return render(container, options);
      }
      state.running = true;
      state.abortController = new AbortController();
      state.waitStartedAt = Date.now();
      state.message = `正在只重新生成镜头 ${index + 1}；其他镜头不会提交…`;
      render(container, options);
      try {
        if (conversationalSet) await generateConversationalSingle(index, parentImage);
        else await generateResult(result, index, parentImage);
        state.message = `镜头 ${index + 1} 已替换为新版；其他镜头未重生，新旧两版均已永久进入共享历史。`;
      } catch (error) {
        state.message = `${error.message}${error.requestId ? ` [请求 ${error.requestId}]` : ''}；旧图仍保留，系统没有自动重试。`;
      } finally {
        state.running = false;
        stopWaiting(state);
        render(container, options);
      }
    });

    container.querySelectorAll('[data-revision-feedback]').forEach(area => area.oninput = () => {
      state.revisionDrafts[area.dataset.revisionFeedback] = area.value;
    });
    container.querySelectorAll('[data-revise-result]').forEach(button => button.onclick = async () => {
      const parentImage = state.images.find(image => image.id === button.dataset.reviseResult);
      const index = results.findIndex(result => result.key === parentImage?.resultKey);
      const result = results[index];
      const feedback = String(state.revisionDrafts[parentImage?.id] || '').trim();
      if (!parentImage || !result || state.running) return;
      if (!feedback) return alert('请先写清楚希望修改的地方');
      if (!globalThis.confirm('本次会在上一轮结果基础上修改1张，并消耗1张额度；原图与修改版都会保留在历史。继续吗？')) return;
      state.health = await studio.services.sceneAnalysis.health();
      if (!infrastructureReady(state.health)) {
        state.message = state.health.error || '生图服务尚未就绪，本次没有提交付费请求。';
        return render(container, options);
      }
      state.running = true;
      state.abortController = new AbortController();
      state.waitStartedAt = Date.now();
      state.message = '正在按你的意见修改这一张图；不会自动重试…';
      render(container, options);
      try {
        if (conversationalSet) await generateConversationalSingle(index, parentImage, feedback);
        else await generateResult(result, index, parentImage, feedback);
        delete state.revisionDrafts[parentImage.id];
        state.message = '修改版已生成；原图和修改版均已进入共享历史。';
      } catch (error) {
        state.message = `${error.message}${error.requestId ? ` [请求 ${error.requestId}]` : ''}；系统没有自动重试。`;
      } finally {
        state.running = false;
        stopWaiting(state);
        render(container, options);
      }
    });

    container.querySelectorAll('[data-review-box]').forEach(box => {
      const image = state.images.find(candidate => candidate.id === box.dataset.reviewBox);
      const draft = state.reviewDrafts[image.id] || { rating: 0, tags: [], note: '' };
      state.reviewDrafts[image.id] = draft;
      box.querySelectorAll('[data-rating]').forEach(button => button.onclick = () => { draft.rating = Number(button.dataset.rating); render(container, options); });
      box.querySelectorAll('.review-tags input').forEach(input => input.onchange = () => { draft.tags = [...box.querySelectorAll('.review-tags input:checked')].map(item => item.value); });
      box.querySelector('textarea').oninput = event => { draft.note = event.target.value; };
    });
    container.querySelectorAll('[data-qa-box]').forEach(box => {
      const image = state.images.find(candidate => candidate.id === box.dataset.qaBox);
      const draft = state.qaDrafts[image.id] || Object.fromEntries((image.qaReview?.passed || []).map(id => [id, true]));
      state.qaDrafts[image.id] = draft;
      box.querySelectorAll('input').forEach(input => input.onchange = () => { draft[input.value] = input.checked; });
    });
    container.querySelectorAll('[data-submit-qa]').forEach(button => button.onclick = async () => {
      const image = state.images.find(candidate => candidate.id === button.dataset.submitQa);
      const evaluation = studio.services.assetPlanner.evaluateOutputQa(state.qaDrafts[image.id] || {});
      image.qaReview = evaluation;
      state.reviewing = true;
      button.disabled = true;
      try {
        await studio.services.reviewHistory.save(historyRecord(image, image.review || {}));
        invalidateHistoryCache();
        image.historySync = 'synced';
        state.message = evaluation.status === 'approved'
          ? '质量验收已通过并写入共享历史。'
          : `图片已保留并标记为未通过；有 ${evaluation.failed.length} 项需要改进，可选择单张重生。`;
      } catch (error) {
        state.message = `质量验收暂未同步：${error.message}。图片及验收状态已保留在当前浏览器。`;
      } finally {
        state.reviewing = false;
        render(container, options);
      }
    });
    container.querySelectorAll('[data-submit-review]').forEach(button => button.onclick = async () => {
      const image = state.images.find(candidate => candidate.id === button.dataset.submitReview);
      const draft = state.reviewDrafts[image.id] || {};
      if (!draft.rating) return alert('请先选择1到5分');
      state.reviewing = true;
      button.disabled = true;
      try {
        await studio.services.reviewHistory.save(historyRecord(image, draft));
        invalidateHistoryCache();
        image.review = { ...draft, synced: true };
        state.message = '评分已写入共享历史；下一轮提示词会读取更新后的质量记忆。';
      } catch (error) {
        state.message = `评分暂未同步：${error.message}。记录已保存在当前浏览器，服务恢复后可继续同步。`;
      } finally {
        state.reviewing = false;
        render(container, options);
      }
    });
  }

  studio.features.generation = { initialize, render };
})(globalThis.BayerStudio);


(function registerHistoryFeature(studio) {
  'use strict';

  function initialize() {
    studio.state.history = { loading: false, loaded: false, attempted: false, error: '', reviews: [], total: 0, nextOffset: 0, hasMore: false, filters: { brandId: 'all', productId: 'all', generationSource: 'all', rating: 'all' } };
  }

  function reviewImage(review) {
    if (review.previewDataUrl) return review.previewDataUrl;
    if (review.imageDataUrl) return review.imageDataUrl;
    return '';
  }

  async function load(container, append = false) {
    const state = studio.state.history;
    state.loading = true;
    state.error = '';
    render(container);
    try {
      const page = await studio.services.reviewHistory.listPage(30, append ? state.nextOffset : 0);
      state.reviews = append ? [...state.reviews, ...page.reviews.filter(review => !state.reviews.some(existing => existing.id === review.id))] : page.reviews;
      state.total = page.total;
      state.nextOffset = page.nextOffset;
      state.hasMore = page.hasMore;
      state.loaded = true;
    } catch (error) {
      state.error = error.message;
      state.reviews = studio.services.reviewHistory.pending();
    } finally {
      state.loading = false;
      state.attempted = true;
      render(container);
    }
  }

  function render(container) {
    const state = studio.state.history;
    const inferred = review => ({
      brandId: review.brandId || (review.mode === 'experience' ? 'custom' : 'bayer'),
      productId: review.productId || (review.mode === 'experience' ? 'custom-upload' : 'shiguang'),
      generationSource: review.generationSource || (review.mode === 'experience' ? 'manual-upload' : 'library-smart')
    });
    const filtered = state.reviews.filter(review => {
      const values = inferred(review);
      return ['brandId', 'productId', 'generationSource'].every(key => state.filters[key] === 'all' || values[key] === state.filters[key])
        && (state.filters.rating === 'all' || (state.filters.rating === 'rated' ? Number(review.rating) > 0 : Number(review.rating) === 0));
    });
    const rated = filtered.filter(review => Number(review.rating) >= 1 && Number(review.rating) <= 5);
    const average = rated.length ? (rated.reduce((sum, review) => sum + Number(review.rating), 0) / rated.length).toFixed(1) : '-';
    const brands = [{ id: 'all', name: '全部品牌' }, ...studio.data.platformCatalog.brands, { id: 'custom', name: '自定义上传' }];
    const products = [{ id: 'all', name: '全部产品' }, ...studio.data.platformCatalog.products, { id: 'custom-upload', name: '临时产品' }];
    const options = (items, selected) => items.map(item => `<option value="${item.id}"${item.id === selected ? ' selected' : ''}>${item.name}</option>`).join('');
    container.innerHTML = `<header class="page-head"><div class="eyebrow">UNIFIED HISTORY</div><h1>统一历史</h1><p class="subtitle">查看、评分和验收生成结果。</p></header>
      <section class="history-filters"><label>品牌<select data-history-filter="brandId">${options(brands, state.filters.brandId)}</select></label><label>产品<select data-history-filter="productId">${options(products, state.filters.productId)}</select></label><label>生成方式<select data-history-filter="generationSource"><option value="all">全部方式</option><option value="library-smart"${state.filters.generationSource === 'library-smart' ? ' selected' : ''}>库内智能生成</option><option value="manual-library"${state.filters.generationSource === 'manual-library' ? ' selected' : ''}>手动库内选图</option><option value="manual-upload"${state.filters.generationSource === 'manual-upload' ? ' selected' : ''}>手动上传</option><option value="custom-upload"${state.filters.generationSource === 'custom-upload' ? ' selected' : ''}>旧版自定义上传</option></select></label><label>评分状态<select data-history-filter="rating"><option value="all">全部状态</option><option value="rated"${state.filters.rating === 'rated' ? ' selected' : ''}>已评分</option><option value="unrated"${state.filters.rating === 'unrated' ? ' selected' : ''}>待评分</option></select></label></section>
      <div class="history-summary"><div><b>${state.total || state.reviews.length}</b><span>共享历史总数</span></div><div><b>${average}</b><span>当前已加载记录中 ${rated.length} 张已评分</span></div><button class="action" id="reloadHistory" ${state.loading ? 'disabled' : ''}>${state.loading ? '读取中…' : '刷新历史'}</button></div>
      ${state.error ? `<div class="validation-error">${studio.utils.escapeHtml(state.error)}</div>` : ''}
      ${filtered.length ? `<section class="history-grid">${filtered.map(review => { const meta = inferred(review); const brand = brands.find(item => item.id === meta.brandId)?.name || meta.brandId; const product = products.find(item => item.id === meta.productId)?.name || meta.productId; const sourceLabel = ({ 'library-smart': '库内智能生成', 'manual-library': '手动库内选图', 'manual-upload': '手动上传', 'custom-upload': '旧版自定义上传' })[meta.generationSource] || meta.generationSource; const qa = review.qaStatus || 'pending'; return `<article class="history-card">${reviewImage(review) ? `<img src="${studio.utils.escapeHtml(reviewImage(review))}" alt="历史生成图片" loading="lazy">` : '<div class="history-image-missing">等待同步</div>'}<div class="history-card-body"><div class="history-badges"><div class="history-score">${Number(review.rating) > 0 ? `${review.rating}/5` : '待评分'}</div><div class="history-qa ${qa}">${qa === 'approved' ? '已通过' : (qa === 'rejected' ? '未通过' : '待验收')}</div></div><b>${studio.utils.escapeHtml(brand)} · ${studio.utils.escapeHtml(product)}</b><span>${studio.utils.escapeHtml(sourceLabel)} · ${studio.utils.escapeHtml(review.combo || '未分类')}</span><span>${studio.utils.escapeHtml(review.visualStyle || '')} · ${studio.utils.escapeHtml(review.sceneId || '')}</span><div class="tags">${(review.tags || []).map(tag => `<span class="tag">${studio.utils.escapeHtml(tag)}</span>`).join('')}</div>${review.note ? `<p>${studio.utils.escapeHtml(review.note)}</p>` : ''}<details><summary>查看提示词</summary><p>${studio.utils.escapeHtml(review.prompt || '')}</p></details></div></article>`; }).join('')}</section>${state.hasMore ? `<div class="history-load-more"><button class="action" id="loadMoreHistory" ${state.loading ? 'disabled' : ''}>加载更多</button></div>` : ''}` : `<div class="empty">${state.loading ? '正在读取…' : (state.reviews.length ? '没有符合条件的记录。' : '暂无生成记录。')}</div>`}`;
    container.querySelectorAll('[data-history-filter]').forEach(select => select.onchange = () => { state.filters[select.dataset.historyFilter] = select.value; render(container); });
    container.querySelector('#reloadHistory').onclick = () => load(container);
    const loadMore = container.querySelector('#loadMoreHistory');
    if (loadMore) loadMore.onclick = () => load(container, true);
    if (!state.attempted && !state.loading) load(container);
  }

  studio.features.history = { initialize, render };
})(globalThis.BayerStudio);


(function registerExperienceFeature(studio) {
  'use strict';

  function initialize() {
    const liveMode = studio.services.experienceGeneration.isLiveMode();
    studio.state.experience = {
      productDataUrl: '',
      environmentDataUrl: '',
      productUploadMessage: '',
      environmentUploadMessage: '',
      prompt: '',
      feedback: '',
      result: null,
      running: false,
      promptRunning: false,
      abortController: null,
      waitStartedAt: 0,
      waitTimer: null,
      liveMode,
      message: liveMode ? '真实接口模式：生成图片会调用 Gemini/OpenAI 并计入每日额度。' : '产品图必填；居家环境参考图可选。上传图片不会写入素材库或历史记录。',
      usage: null
    };
  }

  function imagePreview(dataUrl, label, inputId, required, uploadMessage = '') {
    return `<label class="experience-upload ${dataUrl ? 'has-image' : ''}" for="${inputId}">
      <input id="${inputId}" type="file" accept="image/png,image/jpeg,image/webp">
      ${dataUrl ? `<img src="${dataUrl}" alt="${studio.utils.escapeHtml(label)}">` : '<span class="upload-plus">＋</span>'}
      <b>${studio.utils.escapeHtml(label)}${required ? ' · 必填' : ' · 可选'}</b>
      <small>${dataUrl ? (uploadMessage || '点击或拖入新图片替换') : '点击选择，或把图片直接拖到这里；支持 PNG / JPG / WebP'}</small>
    </label>`;
  }

  async function archiveResult(payload, result, prompt, feedback) {
    if (!result?.b64Json) return false;
    const createdAt = new Date().toISOString();
    await studio.services.reviewHistory.save({
      id: `experience-${payload.requestId || globalThis.crypto?.randomUUID?.() || Date.now()}`,
      rating: 0,
      tags: [],
      note: feedback || '',
      prompt,
      combo: '体验生图',
      presentation: feedback ? '按意见再次生成' : '首次生成',
      visualStyle: '居家背景改图',
      mode: 'experience',
      brandId: 'custom',
      productId: 'custom-upload',
      skuId: 'custom-upload',
      generationSource: 'custom-upload',
      sceneId: 'temporary-experience',
      model: payload.model || 'gpt-image-2',
      quality: 'medium',
      references: [],
      createdAt,
      imageDataUrl: `data:${result.mimeType || 'image/jpeg'};base64,${result.b64Json}`
    });
    if (studio.state.history) studio.state.history.attempted = false;
    return true;
  }

  function resultMarkup(state) {
    if (!state.result) return '';
    const src = `data:${state.result.mimeType || 'image/jpeg'};base64,${state.result.b64Json}`;
    return `<section class="experience-result"><div class="history-heading"><div><h2>本次结果</h2><p>可以填写改进意见再次生图；再次生成计入每日15张额度。</p></div></div>
      <div class="experience-result-layout"><figure class="generated-card"><img src="${src}" alt="体验生图结果"><figcaption><b>居家背景改图</b><a class="action" href="${src}" download="experience-image.jpg">下载原图</a></figcaption></figure>
      <div class="experience-feedback"><label><b>改进意见</b><textarea id="experienceFeedback" rows="7" placeholder="例如：背景换成浅灰色沙发，光线更自然。">${studio.utils.escapeHtml(state.feedback)}</textarea></label><button class="action primary" id="experienceRegenerate" ${state.running ? 'disabled' : ''}>${state.running ? '正在生成…' : '再次生成'}</button></div></div></section>`;
  }

  function render(container) {
    const state = studio.state.experience;
    container.innerHTML = `<header class="page-head"><div class="eyebrow">TEMPORARY EXPERIENCE</div><h1>体验生图</h1><p class="subtitle">上传真实产品图，让 AI 只把背景改成合理的居家环境。产品原始角度、形状、比例、包装、品牌与文字必须保持不变。</p></header>
      <section class="experience-panel"><div class="experience-note"><b>${state.liveMode ? '真实接口模式' : '本地模拟模式'}</b><span>坚持 AI 改图，不做抠图、合成、边缘修整或自动异常判断；每位用户每天15张，全站每天30张。</span></div>
      <div class="experience-upload-grid">${imagePreview(state.productDataUrl, '产品原图', 'experienceProduct', true, state.productUploadMessage)}${imagePreview(state.environmentDataUrl, '居家环境参考', 'experienceEnvironment', false, state.environmentUploadMessage)}</div>
      <div class="experience-actions"><span id="experienceStatus">${studio.utils.escapeHtml(state.message)}</span><button class="action" id="experienceBuildPrompt" ${state.promptRunning || !state.productDataUrl ? 'disabled' : ''}>${state.promptRunning ? 'Gemini 正在生成…' : 'Gemini 生成提示词'}</button>${state.running || state.promptRunning ? '<button class="action" id="cancelExperience" type="button">取消等待</button>' : ''}</div>
      <label class="experience-prompt"><b>可编辑提示词</b><textarea id="experiencePrompt" rows="10" placeholder="上传产品图后，让 Gemini 生成提示词；也可以直接填写。">${studio.utils.escapeHtml(state.prompt)}</textarea></label>
      <div class="experience-submit"><span>${state.usage ? `今日已用：个人 ${state.usage.userDaily}/15 · 全站 ${state.usage.siteDaily}/30` : '生成1张；失败不会自动重试。'}</span><button class="action primary" id="experienceGenerate" ${state.running || !state.productDataUrl || !state.prompt.trim() ? 'disabled' : ''}>${state.running ? 'GPT 正在改图…' : '生成居家背景图'}</button></div></section>
      ${resultMarkup(state)}`;

    if (state.waitTimer) clearInterval(state.waitTimer);
    if (state.running || state.promptRunning) {
      const timeoutSeconds = state.promptRunning ? 25 : 180;
      const updateWait = () => {
        const status = container.querySelector('#experienceStatus');
        if (!status) return;
        const seconds = Math.max(0, Math.floor((Date.now() - state.waitStartedAt) / 1000));
        status.textContent = `${state.message} 已等待 ${seconds} 秒（最长约${timeoutSeconds}秒）。`;
      };
      updateWait();
      state.waitTimer = setInterval(updateWait, 1000);
    }
    const cancelExperience = container.querySelector('#cancelExperience');
    if (cancelExperience) cancelExperience.onclick = () => {
      cancelExperience.disabled = true;
      state.message = state.running ? '正在取消浏览器等待；服务端可能仍在生图，请勿立即重复提交。' : '正在取消提示词生成。';
      state.abortController?.abort();
    };

    function stopWait() {
      if (state.waitTimer) clearInterval(state.waitTimer);
      state.waitTimer = null;
      state.waitStartedAt = 0;
      state.abortController = null;
    }

    async function bindUpload(id, key, label) {
      const input = container.querySelector(`#${id}`);
      const handleFile = async file => {
        if (!file) return;
        try {
          const optimized = studio.services.experienceGeneration.needsOptimization(file);
          state[key] = await studio.services.experienceGeneration.fileDataUrl(file, label);
          state[key === 'productDataUrl' ? 'productUploadMessage' : 'environmentUploadMessage'] = optimized
            ? `已在本机自动优化传输副本（原图 ${(file.size / 1024 / 1024).toFixed(1)}MB 未修改）`
            : '原图已载入；点击可替换';
          state.prompt = '';
          state.feedback = '';
          state.result = null;
          state.message = `${label}已载入；原图仅保存在当前页面内存中。`;
        } catch (error) {
          state.message = error.message;
        }
        render(container);
      };
      input.onchange = () => handleFile(input.files?.[0]);
      studio.utils.bindFileDropZone(input.closest('.experience-upload'), handleFile);
    }
    bindUpload('experienceProduct', 'productDataUrl', '产品图');
    bindUpload('experienceEnvironment', 'environmentDataUrl', '环境参考图');

    container.querySelector('#experiencePrompt').oninput = event => {
      state.prompt = event.target.value;
      state.result = null;
      const generateButton = container.querySelector('#experienceGenerate');
      if (generateButton) generateButton.disabled = state.running || !state.productDataUrl || !state.prompt.trim();
      container.querySelector('.experience-result')?.remove();
    };
    container.querySelector('#experienceBuildPrompt').onclick = async () => {
      state.promptRunning = true;
      state.abortController = new AbortController();
      state.waitStartedAt = Date.now();
      state.result = null;
      state.message = 'Gemini 正在根据产品摆放角度选择沙发、地板或床边等合理居家环境…';
      render(container);
      try {
        const payload = await studio.services.experienceGeneration.buildPrompt({ productDataUrl: state.productDataUrl, environmentDataUrl: state.environmentDataUrl }, { signal: state.abortController.signal });
        state.prompt = payload.prompt || '';
        state.message = payload.mock ? '本地模拟提示词已生成；未调用 Gemini。' : 'Gemini 提示词已生成，可以编辑后再生图。';
      } catch (error) {
        state.message = error.message;
      } finally {
        state.promptRunning = false;
        stopWait();
        render(container);
      }
    };

    async function generate(feedback) {
      state.running = true;
      state.abortController = new AbortController();
      state.waitStartedAt = Date.now();
      state.message = feedback ? '正在按改进意见再次生成；原产品图仍是最高优先级基准…' : '正在把产品放入合理的居家环境…';
      render(container);
      try {
        const previousImageDataUrl = state.result ? `data:${state.result.mimeType || 'image/jpeg'};base64,${state.result.b64Json}` : '';
        const payload = await studio.services.experienceGeneration.generate({
          productDataUrl: state.productDataUrl,
          environmentDataUrl: state.environmentDataUrl,
          previousImageDataUrl,
          prompt: state.prompt,
          feedback
        }, { signal: state.abortController.signal });
        state.result = payload.images?.[0] || null;
        state.usage = payload.usage || state.usage;
        await archiveResult(payload, state.result, state.prompt, feedback);
        state.message = payload.mock ? '预览完成。' : '生成完成。';
      } catch (error) {
        state.message = error.message;
      } finally {
        state.running = false;
        stopWait();
        render(container);
      }
    }

    container.querySelector('#experienceGenerate').onclick = () => generate('');
    const feedback = container.querySelector('#experienceFeedback');
    if (feedback) feedback.oninput = event => { state.feedback = event.target.value; };
    const regenerate = container.querySelector('#experienceRegenerate');
    if (regenerate) regenerate.onclick = () => {
      if (!state.feedback.trim()) return alert('请先填写本次改进意见');
      generate(state.feedback.trim());
    };
  }

  studio.features.experience = { initialize, render };
})(globalThis.BayerStudio);


(function startApplication(studio) {
  'use strict';
  const views = [
    ['library', '01', '参考图库'],
    ['modeling', '02', '产品库'],
    ['promptWorkspace', '03', '创作与生图'],
    ['history', '04', '统一历史']
  ];
  studio.features.library.initialize();
  studio.features.modeling.initialize();
  studio.features.promptWorkspace.initialize();
  studio.features.generation.initialize();
  studio.features.history.initialize();
  studio.features.experience.initialize();
  studio.state.currentView = 'library';

  const app = document.querySelector('#app');
  let view = null;

  function ensureImageViewer() {
    let viewer = document.querySelector('#imageViewer');
    if (viewer) return viewer;
    viewer = document.createElement('dialog');
    viewer.id = 'imageViewer';
    viewer.className = 'image-viewer';
    viewer.innerHTML = '<button class="image-viewer-close" type="button" aria-label="关闭">×</button><img alt="图片预览"><div class="image-viewer-actions"><button class="action" type="button" data-copy-viewer-image>复制图片</button><button class="action primary" type="button" data-save-viewer-image>保存图片</button></div>';
    document.body.appendChild(viewer);
    viewer.querySelector('.image-viewer-close').onclick = () => viewer.close();
    viewer.onclick = event => { if (event.target === viewer) viewer.close(); };
    return viewer;
  }

  async function imageBlob(src) {
    const response = await fetch(src);
    if (!response.ok) throw new Error('图片读取失败');
    return response.blob();
  }

  async function clipboardImageBlob(src) {
    const blob = await imageBlob(src);
    if (blob.type === 'image/png') return blob;
    const bitmap = await createImageBitmap(blob);
    const canvas = document.createElement('canvas');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    canvas.getContext('2d').drawImage(bitmap, 0, 0);
    bitmap.close();
    return new Promise((resolve, reject) => canvas.toBlob(result => result ? resolve(result) : reject(new Error('图片转换失败')), 'image/png'));
  }

  function openImageViewer(image) {
    if (!image.currentSrc && !image.src) return;
    const viewer = ensureImageViewer();
    const src = image.currentSrc || image.src;
    const preview = viewer.querySelector('img');
    preview.src = src;
    preview.alt = image.alt || '图片预览';
    viewer.querySelector('[data-copy-viewer-image]').onclick = async event => {
      const button = event.currentTarget;
      try {
        const blob = await clipboardImageBlob(src);
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        button.textContent = '已复制';
      } catch (error) {
        button.textContent = '复制失败';
      }
      setTimeout(() => { button.textContent = '复制图片'; }, 1500);
    };
    viewer.querySelector('[data-save-viewer-image]').onclick = async () => {
      try {
        const blob = await imageBlob(src);
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const extension = blob.type.includes('png') ? 'png' : blob.type.includes('webp') ? 'webp' : 'jpg';
        link.href = url;
        link.download = `${(image.alt || 'image').replace(/[^\w\u4e00-\u9fff-]+/g, '-')}.${extension}`;
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      } catch (error) {
        window.open(src, '_blank', 'noopener');
      }
    };
    viewer.showModal();
  }

  app.addEventListener('click', event => {
    const image = event.target.closest('.content img');
    if (!image) return;
    event.preventDefault();
    event.stopPropagation();
    openImageViewer(image);
  });

  function render() {
    app.querySelectorAll('[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === studio.state.currentView));
    studio.features[studio.state.currentView].render(view);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function renderShell() {
    app.innerHTML = `<div class="shell"><aside class="sidebar"><div class="brand"><small>MULTI-BRAND VISUAL STUDIO</small>品牌图片<br>生成平台</div><nav class="nav">${views.map(([key, step, label]) => `<button data-view="${key}"><span class="step">${step}</span>${label}</button>`).join('')}</nav><div class="ai-lock-note"><b>AI 安全锁</b><span>当前保持关闭</span></div>${studio.services.accessSession.requiresLogin() ? '<button class="session-logout" id="sessionLogout" type="button">退出登录</button>' : ''}</aside><main class="content" id="view"></main></div>`;
    view = app.querySelector('#view');
    app.querySelectorAll('[data-view]').forEach(button => button.onclick = () => {
      studio.state.currentView = button.dataset.view;
      render();
    });
    const logout = app.querySelector('#sessionLogout');
    if (logout) logout.onclick = () => {
      studio.services.accessSession.clear();
      renderLogin();
    };
    render();
  }

  function renderLogin(message = '') {
    app.innerHTML = `<main class="login-page"><form class="login-card" id="accessLogin"><div class="eyebrow">PRIVATE MULTI-BRAND STUDIO</div><h1>进入品牌图片生成平台</h1><p>请输入团队访问口令。登录后可使用所有品牌产品库，并查看全员共享的永久历史。</p><label for="accessPassphrase">平台访问口令</label><input id="accessPassphrase" name="passphrase" type="password" autocomplete="current-password" required autofocus><button class="action primary" type="submit">登录并记住此设备 7 天</button><div class="login-message" aria-live="polite">${studio.utils.escapeHtml(message)}</div><small>原始口令不会保存在浏览器中；公共或共享设备使用后请退出登录。</small></form></main>`;
    const form = app.querySelector('#accessLogin');
    form.onsubmit = async event => {
      event.preventDefault();
      const button = form.querySelector('button');
      const messageBox = form.querySelector('.login-message');
      button.disabled = true;
      button.textContent = '验证中…';
      messageBox.textContent = '';
      try {
        await studio.services.accessSession.login(studio.services.sceneAnalysis.apiBaseUrl(), form.passphrase.value);
        form.passphrase.value = '';
        renderShell();
      } catch (error) {
        form.passphrase.value = '';
        messageBox.textContent = error.message;
        button.disabled = false;
        button.textContent = '登录并记住此设备 7 天';
        form.passphrase.focus();
      }
    };
  }

  async function start() {
    if (!studio.services.accessSession.requiresLogin()) return renderShell();
    if (!studio.services.accessSession.storedToken()) return renderLogin();
    app.innerHTML = '<main class="login-page"><div class="login-card"><div class="eyebrow">PRIVATE STUDIO</div><h1>正在验证登录状态…</h1></div></main>';
    try {
      if (await studio.services.accessSession.validate(studio.services.sceneAnalysis.apiBaseUrl())) renderShell();
      else renderLogin('登录已过期或平台口令已更新，请重新登录。');
    } catch (error) {
      renderLogin(error.message);
    }
  }

  start();
})(globalThis.BayerStudio);
