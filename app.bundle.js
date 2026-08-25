/* Bayer Shiguang Visual Studio | generated 2026-08-25T09:10:55.286Z */
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

  studio.utils = { escapeHtml, textHash, clamp };
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
    propCategories: ['梳妆台', '书桌', '餐桌', '床头柜']
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

  const productRoot = 'public/products/%E6%97%B6%E5%85%89%E7%89%87/';
  studio.data.products = {
    gallery: [
      ['01_%E8%8D%AF%E7%9B%92%E5%85%AD%E8%A7%86%E5%9B%BE.png', '药盒六视图'],
      ['02_%E8%8D%AF%E6%9D%BF%E5%85%AD%E8%A7%86%E5%9B%BE.png', '药板六视图'],
      ['03_%E5%8D%95%E9%A2%97%E8%8D%AF%E7%89%87%E5%85%AD%E8%A7%86%E5%9B%BE.png', '单颗药片六视图'],
      ['04_%E5%8C%85%E8%A3%85%E7%9B%92_%E6%A0%87%E5%87%86%E6%AD%A3%E9%9D%A2.png', '包装盒正面'],
      ['05_%E8%8D%AF%E6%9D%BF%E4%B8%8E%E8%8D%AF%E7%89%87_%E6%A0%A1%E8%89%B2%E6%AF%8D%E7%89%88.png', '药板与药片校色母版'],
      ['06_%E5%8C%85%E8%A3%85%E7%9B%92%E8%8D%AF%E6%9D%BF%E8%8D%AF%E7%89%87_45%E5%BA%A6%E7%BB%84%E5%90%88.png', '包装盒、药板与药片 45° 组合']
    ].map(([file, label]) => ({ image: productRoot + file, label })),
    combos: ['包装盒＋药板', '包装盒', '药板', '药片'],
    angleFiles: [
      ['model-angle-01.png', '正面偏左约30°', ['slightTop', 'oblique'], '平视', '左斜'],
      ['model-angle-02.png', '正面偏右约30°', ['slightTop', 'oblique'], '平视', '右斜'],
      ['model-angle-03.png', '正面偏左、俯拍', ['slightTop'], '高位俯拍', '左斜'],
      ['model-angle-04.png', '俯拍、正面左侧与底部可见', ['highTop'], '高位俯拍', '右斜'],
      ['model-angle-05.png', '横放高位俯拍、正面右侧与底部可见', ['highTop'], '高位俯拍', '左斜'],
      ['model-angle-06.png', '直立正面、接近平视', ['eye', 'low'], '平视', '正面'],
      ['model-angle-07.png', '直立正面偏左约45°、右侧面可见', ['eye', 'low', 'oblique'], '平视', '左斜'],
      ['model-angle-08.png', '横放低角度、左侧面与底部条码面可见', ['low'], '轻微俯拍', '右斜'],
      ['model-angle-09.png', '横放高位俯拍、正面左侧与底部可见', ['highTop'], '高位俯拍', '右斜'],
      ['model-angle-10.png', '横放近垂直俯拍、正面为主', ['highTop'], '高位俯拍', '正面'],
      ['model-angle-11.png', '横放高位俯拍、正面左侧与底部条码面可见', ['highTop'], '高位俯拍', '右斜'],
      ['model-angle-12.png', '横放垂直俯拍、完整正面可见', ['highTop'], '高位俯拍', '正面']
    ].map(([file, label, compatibleCameraTypes, cameraAngle, subjectOrientation]) => ({ file, label, compatibleCameraTypes, cameraAngle, subjectOrientation })),
    comboAngleFiles: [
      ['combo-angle-01.png', '正面偏左、轻微俯拍', ['slightTop', 'oblique'], '轻微俯拍', '左斜'],
      ['combo-angle-02.png', '正面偏左、高位俯拍', ['highTop', 'oblique'], '高位俯拍', '左斜'],
      ['combo-angle-03.png', '正面右斜、接近平视', ['eye', 'slightTop'], '平视', '右斜'],
      ['combo-angle-04.png', '斜放正面偏右、高位俯拍', ['highTop', 'oblique'], '高位俯拍', '右斜'],
      ['combo-angle-05.png', '正面、高位俯拍', ['highTop'], '高位俯拍', '正面'],
      ['combo-angle-06.png', '正面、低位轻微俯拍', ['low', 'slightTop'], '轻微俯拍', '正面'],
      ['combo-angle-07.png', '正面偏左约45°、接近平视', ['eye', 'oblique'], '平视', '左斜'],
      ['combo-angle-08.png', '横放侧面、接近平视', ['eye', 'low'], '平视', '侧面'],
      ['combo-angle-09.png', '斜放正面偏右、高位俯拍', ['highTop', 'oblique'], '高位俯拍', '右斜'],
      ['combo-angle-10.png', '包装盒与药板正面朝上平放、高位俯拍', ['highTop'], '高位俯拍', '正面'],
      ['combo-angle-11.png', '横放底面朝前、低位俯拍', ['low'], '轻微俯拍', '右斜'],
      ['combo-angle-12.png', '包装盒与药板正面朝上平放、轻微俯拍', ['slightTop'], '轻微俯拍', '正面']
    ].map(([file, label, compatibleCameraTypes, cameraAngle, subjectOrientation]) => ({ file, label, compatibleCameraTypes, cameraAngle, subjectOrientation })),
    blister: { file: 'ref-%E8%8D%AF%E6%9D%BF.png', label: '完整药板' },
    tablet: { file: 'ref-%E8%8D%AF%E7%89%87.png', label: '单颗药片' },
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

  function compatibleAngles(files, cameraType) {
    return files.filter(angle => angle.compatibleCameraTypes.includes(cameraType));
  }

  const cameraRanks = { '低机位仰拍': 0, '平视': 1, '轻微俯拍': 2, '高位俯拍': 3 };

  function chooseCatalogAngle(files, item, variation, variantIndex, salt) {
    const cameraType = variation.cameraType || 'slightTop';
    let candidates = compatibleAngles(files, cameraType);
    let cameraMatch = 'planned';
    let orientationMatch = 'unrestricted';
    if (item.cameraAngle) {
      const exactCamera = files.filter(angle => angle.cameraAngle === item.cameraAngle);
      if (exactCamera.length) {
        candidates = exactCamera;
        cameraMatch = 'exact';
      } else {
        const targetRank = cameraRanks[item.cameraAngle];
        const nearestDistance = Math.min(...files.map(angle => Math.abs((cameraRanks[angle.cameraAngle] ?? 1) - targetRank)));
        candidates = files.filter(angle => Math.abs((cameraRanks[angle.cameraAngle] ?? 1) - targetRank) === nearestDistance);
        cameraMatch = 'nearest';
      }
      if (item.subjectOrientation && item.subjectOrientation !== '不限') {
        const exactOrientation = candidates.filter(angle => angle.subjectOrientation === item.subjectOrientation);
        if (exactOrientation.length) {
          candidates = exactOrientation;
          orientationMatch = 'exact';
        } else {
          orientationMatch = 'unavailable';
        }
      }
    }
    if (!candidates.length) candidates = files;
    const selected = candidates[textHash(`${salt}|${item.id}|${variation.position}|${variantIndex}`) % candidates.length];
    return {
      ...selected,
      cameraType,
      cameraMatch,
      orientationMatch,
      reason: item.cameraAngle
        ? cameraMatch === 'exact'
          ? `场景机位“${item.cameraAngle}”已匹配${orientationMatch === 'unavailable' ? '；指定主体朝向暂无对应实拍图' : `；主体朝向“${item.subjectOrientation || '不限'}”`}`
          : `暂无“${item.cameraAngle}”产品实拍图，使用最接近的“${selected.cameraAngle}”机位`
        : `方案机位“${variation.camera}”匹配 ${cameraType} 实拍角度组`
    };
  }

  function chooseAngle(item, variation, variantIndex) {
    return chooseCatalogAngle(studio.data.products.angleFiles, item, variation, variantIndex, 'box');
  }

  function chooseComboAngle(item, variation, variantIndex) {
    return chooseCatalogAngle(studio.data.products.comboAngleFiles, item, variation, variantIndex, 'box-blister');
  }

  function productReference(item, variation, variantIndex, combo) {
    const products = studio.data.products;
    if (combo === '包装盒＋药板') {
      const angle = chooseComboAngle(item, variation, variantIndex);
      return { image: products.root + angle.file, label: `包装盒＋药板 · ${angle.label}`, angle, kind: 'box-blister' };
    }
    if (combo === '药板') return { image: products.root + products.blister.file, label: products.blister.label, kind: 'blister' };
    if (combo === '药片') return { image: products.root + products.tablet.file, label: products.tablet.label, kind: 'tablet' };
    const angle = chooseAngle(item, variation, variantIndex);
    return { image: products.root + angle.file, label: `包装盒 · ${angle.label}`, angle, kind: 'box' };
  }

  studio.prompt.chooseAngle = chooseAngle;
  studio.prompt.chooseComboAngle = chooseComboAngle;
  studio.prompt.productReference = productReference;
})(globalThis.BayerStudio);


(function registerPromptRules(studio) {
  'use strict';

  const cameraTone = '色调严格锁定为iPhone 17 Pro Max原相机后置镜头风格与5000K中性日光白平衡。灰卡、白墙、白桌面和包装白色区域必须呈中性白或中性灰，不得出现奶油黄、米黄或暖白；产品紫色必须保持真实冷静的标准紫色。禁止复古报纸黄，禁止自动暖化、夕阳光、钨丝灯、暖黄室内灯、暖黄滤镜、金黄高光、棕黄阴影、整体黄偏或橙偏；即使场景参考图本身偏黄，也必须校正回5000K中性日光。';
  const environment = '场景参考图仅作为摄影风格与居家氛围参考，不是待复制的底图。保持同类居家场景、拍摄机位级别、自然光方向、景深、明暗节奏、生活感与简洁程度，但必须生成与参考图清晰可区分的新场景：同时改变背景墙面或家具款式、桌面或背景的空间布局、原有物件的外形与摆放位置，至少形成三处明显可见的场景差异。禁止直接复制参考图、原位复刻背景、保留完全相同的家具轮廓或将原图简单替换产品；不得出现与原场景完全相同的具体元素。原图简洁时生成结果也必须同样简洁，不得凭空添加原图没有且用户未选择的物件；只有用户额外选择的白底道具可以原样复用。画面只出现居家环境，不出现完整人物、户外、门店或药房；洗手台属于允许的居家场景，但不得扩展成完整浴室环境。';
  const reverseEnvironment = environment;
  const noArtwork = '最终画面只保留纯摄影画面与产品包装本身真实文字；禁止额外标题、花字、副标题、广告文案、箭头、贴纸、角标、水印、边框、图文排版和任何后期叠加文字。参考图中的文字和图形标记一律忽略。';
  const bed = '床品只能作为远处背景，产品不得放在床、床单、被子或枕头上。';
  const identity = {
    '包装盒＋药板': '产品参考图是唯一产品外观依据。完整还原图中包装盒的品牌、文字、盒型结构以及完整药板的结构、颜色、比例和二者相对关系；可见文字清晰，不出现错字、乱码、无关Logo或虚构结构。',
    '包装盒': '产品参考图是唯一产品外观依据。完整还原图中的品牌、文字、盒型结构、宽高厚比例和可见包装面；可见文字清晰，不出现错字、乱码、无关Logo或虚构包装面。',
    '药板': '产品参考图是唯一产品外观依据。完整还原图中的药板结构、泡罩数量、紫色材质、边缘轮廓和比例，不改变或补画未显示结构。',
    '药片': '产品参考图是唯一产品外观依据。完整还原图中单颗药片的颜色、形状、厚度、边缘轮廓和比例，不改变或补画未显示结构。'
  };

  const comboSubjects = {
    '包装盒＋药板': '画面主体严格保持产品参考图中的一个包装盒与一板完整药板，二者各自完整、边界清楚且稳定置于同一硬质桌面。药板必须泡罩面朝上平放，整片薄板与桌面平行并形成连续贴近的接触阴影；禁止药板独立直立、斜立、倚靠包装盒或悬空。包装盒必须按参考图姿态以真实接触面落在桌面，接触边缘清楚且有贴近的自然接触阴影；禁止盒底留白、漂浮或仅靠远离盒体的投影制造接触感。不得增加任何未选择的产品形态。',
    '包装盒': '画面主体严格保持产品参考图中的一个包装盒。包装盒必须按参考图姿态以真实接触面落在硬质桌面，接触边缘清楚且有贴近的自然接触阴影；禁止盒底留白、漂浮、悬空或仅靠远离盒体的投影制造接触感。不得增加任何未选择的产品形态。',
    '药板': '画面主体严格保持产品参考图中的一板完整药板。药板必须泡罩面朝上完全平放在硬质桌面，整片薄板与桌面平行，边缘和底面形成连续贴近的接触阴影；禁止独立直立、斜立、倚靠其他物体或悬空。不得增加任何未选择的产品形态。',
    '药片': '画面主体严格保持产品参考图中的单颗药片，并让药片底部真实接触桌面或合适容器，具有贴近且符合体积的接触阴影；禁止悬浮。不得增加任何未选择的产品形态。'
  };

  function subjectRule(combo, referenceHasHand) {
    if (combo === '包装盒＋药板' && referenceHasHand) return '画面主体严格保持产品参考图中的一个包装盒与一板完整药板。包装盒必须由参考图中的手指或手掌自然、真实地持握支撑，或按参考图姿态真实接触硬质桌面；禁止盒底留白、漂浮、脱离手部悬空或虚构桌面接触。药板必须泡罩面朝上或朝向镜头，并由可见手指、手掌真实托住；如果没有手部直接支撑，则必须完全平放在硬质桌面，形成连续贴近的接触阴影。禁止药板无支撑独立直立、漂浮在包装盒旁边、悬空或仅依靠虚构阴影。不得增加任何未选择的产品形态。';
    if (combo === '包装盒' && referenceHasHand) return '画面主体严格保持产品参考图中的一个包装盒。包装盒必须由参考图中的手指和手掌自然、真实地持握支撑，指尖遮挡、受力关系与握持角度符合现实；禁止盒底留白、漂浮、脱离手部悬空或虚构桌面接触，不强制包装盒落在桌面。不得增加任何未选择的产品形态。';
    if (combo === '药板' && referenceHasHand) return '画面主体严格保持产品参考图中的一板完整药板。药板必须泡罩面朝上或朝向镜头，并由参考图中的手指、手掌自然持握或托住，指尖接触、受力和薄板姿态符合现实；禁止药板无支撑独立直立、悬空或脱离手部，不强制药板落在桌面。不得增加任何未选择的产品形态。';
    return comboSubjects[combo];
  }

  studio.prompt.rules = { cameraTone, environment, reverseEnvironment, noArtwork, bed, identity, comboSubjects, subjectRule };
})(globalThis.BayerStudio);


(function registerPromptValidator(studio) {
  'use strict';

  const requiredChecks = [
    ['camera-tone', 'iPhone 17 Pro Max原相机后置镜头风格', '缺少原相机色调锁定'],
    ['white-balance-5000k', '5000K中性日光白平衡', '缺少5000K中性日光白平衡锁定'],
    ['no-yellow', '禁止复古报纸黄', '缺少禁止黄偏规则'],
    ['single-product-reference', '仅使用这一张产品参考图', '缺少单产品参考图锁定'],
    ['identity', '产品参考图是唯一产品外观依据', '缺少产品一致性规则'],
    ['reverse-scene', '先在内部倒推分析第一张场景参考图', '缺少参考场景倒推分析'],
    ['scene-originality', '禁止直接复制参考图', '缺少禁止直接复制参考场景规则'],
    ['no-artwork', '禁止额外标题、花字', '缺少禁止花字和叠加文字规则'],
    ['ratio', '图片比例为', '缺少图片比例']
  ];

  function validatePrompt(prompt, context) {
    const issues = requiredChecks
      .filter(([, phrase]) => !prompt.includes(phrase))
      .map(([code, , message]) => ({ code, message }));

    const expectsHand = context.referenceHasHand;
    if (!prompt.includes('画面只出现居家环境') && !prompt.includes('简单居家环境')) {
      issues.push({ code: 'home-only', message: '缺少居家环境锁定' });
    }
    if (expectsHand && !prompt.includes('自然的手或手臂')) {
      issues.push({ code: 'hand-required', message: '手持参考缺少手部要求' });
    }
    if (!expectsHand && !prompt.includes('不出现手、手臂或人物')) {
      issues.push({ code: 'hand-forbidden', message: '静置参考缺少无手规则' });
    }
    if (!prompt.includes(studio.prompt.rules.subjectRule(context.combo, expectsHand))) {
      issues.push({ code: 'product-form', message: '缺少所选产品形态锁定' });
    }
    if (context.combo.includes('包装盒') && !prompt.includes('禁止盒底留白、漂浮')) {
      issues.push({ code: 'box-contact', message: '包装盒缺少桌面接触与防悬浮规则' });
    }
    if (context.combo.includes('药板') && !prompt.includes('药板必须泡罩面朝上')) {
      issues.push({ code: 'blister-flat', message: '药板缺少泡罩面朝上平放规则' });
    }
    return { valid: issues.length === 0, issues };
  }

  studio.prompt.validatePrompt = validatePrompt;
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

  function handRule(item, variation) {
    if (!referenceHasHand(item)) return '静置构图，画面不出现手、手臂或人物。';
    if (shouldReverseReference(item)) {
      return '画面出现自然的手或手臂，借鉴场景参考图的手持展示方式、拍摄距离和生活感，但调整手指弯曲、手腕角度、入画位置或持握姿态，形成清晰可见的新动作；不逐像素复制原手势，不新增手指，不遮挡时光片品牌与关键结构。';
    }
    if (item.format === '细节展示') {
      return `画面出现自然的手或手臂，参考原图的掌心或指尖展示方式，${variation.hand}，不遮挡产品主体。`;
    }
    return `画面出现自然的手或手臂，${variation.hand}，以放松且符合现实的姿势持握产品。`;
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
    return `仅使用这一张产品参考图，产品必须保持其中的${angleText}、朝向、轮廓、透视、可见表面和比例。画面中的纵向或横向排列只表示图像平面方向，产品在三维空间中的承托关系必须服从${support}。若场景机位与产品参考图冲突，优先选择与场景机位及主体朝向一致的产品实拍图；不得旋转推演、三维重建、拉宽、压扁或虚构不可见表面。`;
  }

  function selectedPropRule(selectedProps) {
    if (!selectedProps.length) return '本次没有选择额外道具：场景物件仅沿用参考图中已有的类别，但必须改变具体款式和摆放位置，不得凭空添加其他道具、容器、食物或未选择的产品形态。';
    return `只额外加入所选白底道具参考图中的${selectedProps.map(prop => prop.label).join('、')}，保持其外观、颜色、材质和设计，不对道具本身进行改造；其他场景物件仅沿用原有类别，同时更换具体款式与摆放位置，不得自行添加其他道具或未选择的产品形态。`;
  }

  function generatePrompt(input) {
    const { item, variantIndex, combo, ratio, selectedProps = [] } = input;
    const variation = studio.prompt.planVariation(item, variantIndex);
    const productReference = studio.prompt.productReference(item, variation, variantIndex, combo);
    const hasHand = referenceHasHand(item);
    const reverseReference = shouldReverseReference(item);
    const sections = [
      '先在内部倒推分析第一张场景参考图，不输出分析过程：提炼其摄影风格、机位级别、景深、自然光方向、生活氛围、画面疏密和原有物件类别，再进行同风格、不同场景的倒推式重建。必须创作新的背景结构、物件布局和画面细节，产品位置与构图可适度调整；禁止直接复制参考图，禁止只在原图上替换产品。',
      reverseReference ? studio.prompt.rules.reverseEnvironment : studio.prompt.rules.environment,
      studio.prompt.rules.subjectRule(combo, hasHand),
      handRule(item, variation),
      orientationRule(productReference, hasHand),
      studio.prompt.rules.identity[combo],
      studio.prompt.rules.bed,
      selectedPropRule(selectedProps),
      studio.prompt.rules.noArtwork,
      studio.prompt.rules.cameraTone,
      `同批方案保持统一摄影风格与所选产品真实角度，但背景结构、家具款式、物件位置、主体占位或手势必须与场景参考图及其他方案形成清晰可见的差异。图片比例为${ratio}。`
    ].filter(Boolean);
    const prompt = sections.join('\n');
    const context = { combo, referenceHasHand: hasHand };
    return {
      prompt,
      variation,
      productReference,
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

  function multiAxis(key, label, values, selected) {
    return `<div class="axis" data-multi-filter="${key}"><b>${label}</b><button class="pill ${selected.size ? '' : 'active'}" data-value="全部">全部</button>${values.map(value => `<button class="pill ${selected.has(value) ? 'active' : ''}" data-value="${value}">${value}</button>`).join('')}</div>`;
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
    const props = studio.state.props || [];
    const showingProps = filters.materialType === '道具';
    const activeTotal = showingProps ? props.length : materials.length;
    container.innerHTML = `
      <header class="page-head"><div class="eyebrow">MATERIAL LIBRARY</div><h1>素材库</h1><p class="subtitle">场景参考 ${materials.length} 张 · 道具 ${props.length} 张 · 共 ${materials.length + props.length} 张；人工分类同步影响提示词。</p></header>
      <section><div class="axis" data-filter="materialType"><b>素材类型</b>${studio.data.classification.materialTypes.map(value => `<button class="pill ${filters.materialType === value ? 'active' : ''}" data-value="${value}">${value}</button>`).join('')}</div>${showingProps ? `<div class="axis" data-filter="propCategory"><b>道具分类</b>${['全部', ...studio.data.classification.propCategories].map(value => `<button class="pill ${filters.propCategory === value ? 'active' : ''}" data-value="${value}">${value}</button>`).join('')}</div>` : ''}${singleAxes.filter(([key]) => !showingProps || ['cameraAngle', 'subjectOrientation'].includes(key)).map(([key, label, values]) => `<div class="axis" data-filter="${key}"><b>${label}</b>${['全部', ...values].map(value => `<button class="pill ${filters[key] === value ? 'active' : ''}" data-value="${value}">${value}</button>`).join('')}</div>`).join('')}${!showingProps && filters.format === '细节展示' ? multiAxis('detailTags', '细节展示', studio.data.classification.detailTags, filters.detailTags) : ''}${showingProps ? '' : multiAxis('productForms', '产品组合', studio.data.classification.productForms, filters.productForms)}</section>
      <div class="toolbar"><span class="count">显示 ${visible.length} / ${activeTotal} 张</span><div class="actions"><button class="action primary" id="exportClassifications">导出当前分类</button><button class="action" id="importClassifications">导入分类</button><input id="classificationFile" type="file" accept=".json,application/json" hidden><button class="action" id="resetAllClassifications">恢复全部初始分类</button></div></div>
      <section class="grid">${visible.map(item => `
        <article class="card" data-material="${item.id}"><img src="${encodeURI(item.image)}" alt="${studio.utils.escapeHtml(item.title)}" loading="lazy"><div class="card-body"><span class="code">${item.id}</span><h2>${studio.utils.escapeHtml(item.title)}</h2><div class="tags">${tagMarkup(item)}</div><div class="actions"><button class="action" data-edit-material="${item.id}">编辑分类</button>${item.sourceUrl ? `<a class="source-link" href="${studio.utils.escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener noreferrer">查看原始来源</a>` : ''}</div></div>${studio.state.libraryEditingId === item.id ? editorMarkup(item) : ''}</article>`).join('')}</section>`;

    container.querySelectorAll('[data-filter] .pill').forEach(button => button.onclick = () => {
      filters[button.parentElement.dataset.filter] = button.dataset.value;
      if (button.parentElement.dataset.filter === 'format' && button.dataset.value !== '细节展示') filters.detailTags.clear();
      render(container);
    });
    container.querySelectorAll('[data-multi-filter] .pill').forEach(button => button.onclick = () => {
      const set = filters[button.parentElement.dataset.multiFilter];
      if (button.dataset.value === '全部') set.clear();
      else set.has(button.dataset.value) ? set.delete(button.dataset.value) : set.add(button.dataset.value);
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
  let editingFile = null;

  function initialize() {
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
      angle.original = { label: angle.label, cameraAngle: angle.cameraAngle, subjectOrientation: angle.subjectOrientation };
      if (saved[angle.file]) Object.assign(angle, saved[angle.file]);
    });
  }

  function payload() {
    const products = studio.data.products;
    return { schema: 'bayer-product-model-angles-v1', exportedAt: new Date().toISOString(), items: [...products.angleFiles, ...products.comboAngleFiles].map(item => ({ file: item.file, label: item.label, cameraAngle: item.cameraAngle, subjectOrientation: item.subjectOrientation })) };
  }

  function download() {
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload(), null, 2)], { type: 'application/json;charset=utf-8' }));
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = '拜耳时光片产品建模角度分类.json'; document.body.append(anchor); anchor.click(); anchor.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function persist(angle) {
    const saved = studio.services.storage.read(editKey, {});
    saved[angle.file] = { label: angle.label, cameraAngle: angle.cameraAngle, subjectOrientation: angle.subjectOrientation };
    studio.services.storage.write(editKey, saved);
  }

  function render(container) {
    const products = studio.data.products;
    const angles = products.angleFiles.map(angle => ({ image: products.root + angle.file, ...angle }));
    const comboAngles = products.comboAngleFiles.map(angle => ({ image: products.root + angle.file, ...angle }));
    const generationReferences = [products.blister, products.tablet].map(reference => ({ image: products.root + reference.file, label: reference.label }));
    const editor = item => `<div class="model-angle-editor"><label>角度描述<input data-model-label value="${studio.utils.escapeHtml(item.label)}"></label><label>拍摄机位<select data-model-camera>${studio.data.classification.cameraAngles.map(value => `<option${value === item.cameraAngle ? ' selected' : ''}>${value}</option>`).join('')}</select></label><label>产品朝向<select data-model-orientation>${studio.data.classification.subjectOrientations.map(value => `<option${value === item.subjectOrientation ? ' selected' : ''}>${value}</option>`).join('')}</select></label><div class="actions"><button class="action" data-model-cancel>取消</button><button class="action primary" data-model-save="${item.file}">保存角度</button></div></div>`;
    const cards = items => items.map(product => `<article class="product-card" data-model-file="${product.file || ''}"><img src="${product.image}" alt="${studio.utils.escapeHtml(product.label)}"><span>${studio.utils.escapeHtml(product.label)}</span>${product.cameraAngle ? `<div class="tags modeling-tags"><span class="tag">机位:${product.cameraAngle}</span><span class="tag">朝向:${product.subjectOrientation}</span></div><div class="model-card-actions"><button class="action" data-model-edit="${product.file}">编辑分类</button></div>${editingFile === product.file ? editor(product) : ''}` : ''}</article>`).join('');
    container.innerHTML = `<header class="page-head"><div class="eyebrow">PRODUCT MODELING</div><h1>产品建模</h1><p class="subtitle">产品实拍角度可人工编辑；修改后立即影响唯一产品参考图自动匹配。</p></header><div class="toolbar"><div class="axis"><b>产品</b><button class="pill active">时光片</button></div><div class="actions"><button class="action primary" id="exportModelAngles">导出建模分类</button><button class="action" id="importModelAngles">导入建模分类</button><input id="modelAngleFile" type="file" accept=".json,application/json" hidden></div></div><h3 class="section-title">标准母版 · 6 张</h3><section class="product-grid">${cards(products.gallery)}</section><h3 class="section-title">药板与药片单图参考 · 2 张</h3><section class="product-grid">${cards(generationReferences)}</section><h3 class="section-title">包装盒生成角度 · 12 张</h3><section class="product-grid">${cards(angles)}</section><h3 class="section-title">包装盒＋药板真实组合角度 · 12 张</h3><section class="product-grid">${cards(comboAngles)}</section>`;
    container.querySelectorAll('[data-model-edit]').forEach(button => button.onclick = () => { editingFile = button.dataset.modelEdit; render(container); });
    container.querySelectorAll('[data-model-cancel]').forEach(button => button.onclick = () => { editingFile = null; render(container); });
    container.querySelectorAll('[data-model-save]').forEach(button => button.onclick = () => {
      const card = button.closest('[data-model-file]');
      const angle = [...products.angleFiles, ...products.comboAngleFiles].find(item => item.file === button.dataset.modelSave);
      angle.label = card.querySelector('[data-model-label]').value.trim() || angle.label;
      angle.cameraAngle = card.querySelector('[data-model-camera]').value;
      angle.subjectOrientation = card.querySelector('[data-model-orientation]').value;
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
        (imported.items || []).forEach(row => { const angle = known.get(row.file); if (!angle) return; if (row.label) angle.label = row.label; if (studio.data.classification.cameraAngles.includes(row.cameraAngle)) angle.cameraAngle = row.cameraAngle; if (studio.data.classification.subjectOrientations.includes(row.subjectOrientation)) angle.subjectOrientation = row.subjectOrientation; persist(angle); count += 1; });
        if (!count) throw new Error('没有匹配的产品建模参考图');
        editingFile = null; studio.state.prompt.results = []; render(container); alert(`已导入 ${count} 张产品建模角度分类。`);
      } catch (error) { alert(`导入失败：${error.message}`); }
    };
  }
  studio.features.modeling = { initialize, render, buildClassificationExport: payload };
})(globalThis.BayerStudio);


(function registerPromptWorkspace(studio) {
  'use strict';
  const promptEditKey = 'bayer-prompt-text-edits-v4';
  const filterAxes = [
    ['style', '质感', ['全部', '精致随手PO', '素人随手PO']],
    ['scene', '风格', ['全部', '生活感', '摆拍感', '背景']],
    ['format', '内容', ['全部', '手持', '静置', '细节展示']],
    ['cameraAngle', '拍摄机位', ['全部', '平视', '轻微俯拍', '高位俯拍', '低机位仰拍']],
    ['subjectOrientation', '主体朝向', ['全部', '正面', '左斜', '右斜', '侧面', '不限']]
  ];

  function initialize() {
    studio.state.prompt = {
      selectedSceneIds: new Set(),
      selectedPropIds: new Set(),
      filters: { style: '全部', scene: '全部', format: '全部', cameraAngle: '全部', subjectOrientation: '全部', detailTags: new Set(), productForms: new Set() },
      propCategory: '全部',
      selectorTab: '场景参考',
      selectorOpen: false,
      scenePage: 0,
      propPage: 0,
      combo: '包装盒＋药板',
      count: 1,
      ratio: '3:4',
      results: [],
      savedTexts: {
        ...studio.services.storage.read('bayer-prompt-text-edits-v1', {}),
        ...studio.services.storage.read('bayer-prompt-text-edits-v2', {}),
        ...studio.services.storage.read('bayer-prompt-text-edits-v3', {}),
        ...studio.services.storage.read(promptEditKey, {})
      }
    };
  }

  function filteredMaterials() {
    const state = studio.state.prompt;
    const singlesMatch = item => ['style', 'scene', 'format', 'cameraAngle', 'subjectOrientation'].every(key => state.filters[key] === '全部' || item[key] === state.filters[key]);
    const includesEvery = (values, selected) => [...selected].every(value => (values || []).includes(value));
    return studio.state.materials.filter(item => !item.deleted && singlesMatch(item) &&
      (!state.filters.detailTags.size || (item.format === '细节展示' && includesEvery(item.detailTags, state.filters.detailTags))) &&
      includesEvery(item.productForms, state.filters.productForms));
  }

  function multiFilterAxis(key, label, values, selected) {
    return `<div class="axis" data-prompt-multi-filter="${key}"><b>${label}</b><button class="pill ${selected.size ? '' : 'active'}" data-value="全部">全部</button>${values.map(value => `<button class="pill ${selected.has(value) ? 'active' : ''}" data-value="${value}">${value}</button>`).join('')}</div>`;
  }

  function materialTags(item) {
    return [item.style, item.scene, item.format, ...(item.format === '细节展示' ? item.detailTags : []), ...item.productForms.map(value => `产品:${value}`), `机位:${item.cameraAngle || '平视'}`, `朝向:${item.subjectOrientation || '不限'}`]
      .map(value => `<span class="tag">${studio.utils.escapeHtml(value)}</span>`).join('');
  }

  function filteredProps() {
    const state = studio.state.prompt;
    const props = studio.state.props || studio.data.props;
    return state.propCategory === '全部' ? props : props.filter(prop => prop.category === state.propCategory);
  }

  function savePromptText(key, value) {
    studio.state.prompt.savedTexts[key] = value;
    studio.services.storage.write(promptEditKey, studio.state.prompt.savedTexts);
  }

  function resultKey(itemId, state, variantIndex, selectedProps) {
    const propSignature = selectedProps.map(prop => prop.id).sort().join(',') || 'no-props';
    return `original-scene-v4|${itemId}|${state.combo}|${state.ratio}|${propSignature}|${variantIndex}`;
  }

  function validationFor(text, item, combo) {
    return studio.prompt.validatePrompt(text, {
      combo,
      referenceHasHand: studio.prompt.referenceHasHand(item)
    });
  }

  function validationMarkup(validation) {
    return validation.valid
      ? '<div class="validation-ok">✓ 已通过硬规则校验</div>'
      : `<div class="validation-error">${validation.issues.map(issue => issue.message).join('；')}</div>`;
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

  function buildResults() {
    const state = studio.state.prompt;
    if (!state.selectedSceneIds.size) return alert('请先选择至少一张场景参考素材');
    const selectedProps = (studio.state.props || studio.data.props).filter(prop => state.selectedPropIds.has(prop.id));
    const results = [];
    for (const id of state.selectedSceneIds) {
      const item = studio.state.materials.find(material => material.id === id);
      for (let variantIndex = 0; variantIndex < state.count; variantIndex += 1) {
        const generated = studio.prompt.generatePrompt({ item, variantIndex, combo: state.combo, ratio: state.ratio, selectedProps });
        const key = resultKey(id, state, variantIndex, selectedProps);
        results.push({ key, item, variantIndex, selectedProps, ...generated, text: state.savedTexts[key] ?? generated.prompt });
      }
    }
    state.results = results;
  }

  function renderResults() {
    const state = studio.state.prompt;
    if (!state.results.length) return '';
    return `<section class="global-edit"><h3>提示词编辑</h3><textarea id="globalPromptEdit" placeholder="填写需要追加到本批所有提示词的要求。"></textarea><div class="actions"><button class="action" id="applyGlobalEdit">应用到全部</button><button class="action" id="copyAllPrompts">复制全部提示词</button></div></section><section class="prompt-results">${state.results.map(result => {
      const references = [
        { image: result.item.image, label: `场景参考 · ${result.item.id}` },
        { image: result.productReference.image, label: `唯一产品参考 · ${result.productReference.label}` },
        ...result.selectedProps.map(prop => ({ image: prop.image, label: `道具参考 · ${prop.label}` }))
      ];
      const validation = validationMarkup(validationFor(result.text, result.item, state.combo));
      const angleWarning = result.productReference.angle && result.productReference.angle.cameraMatch === 'nearest'
        ? `<div class="validation-error">${studio.utils.escapeHtml(result.productReference.angle.reason)}</div>` : '';
      return `<article class="prompt-result" data-result="${result.key}"><div class="references">${references.map(reference => `<figure><img src="${studio.utils.escapeHtml(reference.image)}" alt="${studio.utils.escapeHtml(reference.label)}"><figcaption>${studio.utils.escapeHtml(reference.label)}</figcaption></figure>`).join('')}</div><div><div class="result-meta">${result.item.id} · 差异方案 ${result.variantIndex + 1} / ${state.count}</div><div class="count">场景机位 ${result.item.cameraAngle || '平视'} · 主体朝向 ${result.item.subjectOrientation || '不限'} · ${result.productReference.angle ? '产品机位 ' + result.productReference.angle.cameraAngle : result.productReference.label}</div>${angleWarning}${validation}<textarea rows="8">${studio.utils.escapeHtml(result.text)}</textarea><div class="actions"><button class="action" data-expand-prompt>展开全文</button><button class="action" data-copy>复制此条</button><button class="action" data-restore>恢复自动版本</button></div></div></article>`;
    }).join('')}</section>`;
  }

  function render(container) {
    const state = studio.state.prompt;
    const materials = filteredMaterials();
    const props = filteredProps();
    const pageSize = 24;
    const scenePages = Math.max(1, Math.ceil(materials.length / pageSize));
    const propPages = Math.max(1, Math.ceil(props.length / pageSize));
    state.scenePage = Math.min(state.scenePage, scenePages - 1);
    state.propPage = Math.min(state.propPage, propPages - 1);
    const shownMaterials = materials.slice(state.scenePage * pageSize, (state.scenePage + 1) * pageSize);
    const shownProps = props.slice(state.propPage * pageSize, (state.propPage + 1) * pageSize);
    const selectedScenes = studio.state.materials.filter(item => state.selectedSceneIds.has(item.id));
    const selectedProps = (studio.state.props || studio.data.props).filter(item => state.selectedPropIds.has(item.id));
    const thumbs = [...selectedScenes, ...selectedProps].map(item => `<img src="${encodeURI(item.image)}" title="${studio.utils.escapeHtml(item.title || item.label)}" alt="${studio.utils.escapeHtml(item.id)}">`).join('');
    const isScene = state.selectorTab === '场景参考';
    container.innerHTML = `
      <header class="page-head"><div class="eyebrow">BATCH PROMPT WORKSPACE</div><h1>提示词</h1><p class="subtitle">以场景参考图为蓝本，匹配单张产品实拍图，仅按需加入所选道具。</p></header>
      <section class="prompt-settings"><label>产品组合<select id="promptCombo">${studio.data.products.combos.map(value => `<option${value === state.combo ? ' selected' : ''}>${value}</option>`).join('')}</select></label><label>每张生成数量<input id="promptCount" type="number" min="1" max="8" value="${state.count}"></label><label>图片比例<select id="promptRatio">${['1:1','3:4','4:3','4:5','9:16','16:9'].map(value => `<option${value === state.ratio ? ' selected' : ''}>${value}</option>`).join('')}</select></label></section>
      <section class="compact-selector"><div class="selector-head"><h3 class="section-title">参考选择 · 场景 ${state.selectedSceneIds.size} · 道具 ${state.selectedPropIds.size}</h3><button class="action" id="toggleReferenceSelector">${state.selectorOpen ? '收起选择器' : '展开选择器'}</button></div><div class="selected-thumb-strip">${thumbs || '<span class="count">尚未选择场景或道具</span>'}</div>${state.selectorOpen ? `<div class="selector-tabs">${['场景参考', '道具'].map(value => `<button class="pill ${state.selectorTab === value ? 'active' : ''}" data-selector-tab="${value}">${value}</button>`).join('')}</div>${isScene ? `${filterAxes.map(([key,label,values]) => `<div class="axis" data-prompt-filter="${key}"><b>${label}</b>${values.map(value => `<button class="pill ${state.filters[key] === value ? 'active' : ''}" data-value="${value}">${value}</button>`).join('')}</div>`).join('')}${state.filters.format === '细节展示' ? multiFilterAxis('detailTags', '细节展示', studio.data.classification.detailTags, state.filters.detailTags) : ''}${multiFilterAxis('productForms', '产品组合', studio.data.classification.productForms, state.filters.productForms)}<div class="compact-reference-grid">${shownMaterials.map(item => `<article class="card selectable ${state.selectedSceneIds.has(item.id) ? 'selected' : ''}" data-scene="${item.id}"><span class="selection-mark">✓</span><img src="${encodeURI(item.image)}" alt="${studio.utils.escapeHtml(item.title)}" loading="lazy"><div class="card-body"><span class="code">${item.id}</span><h2>${studio.utils.escapeHtml(item.title)}</h2><div class="tags">${materialTags(item)}</div></div></article>`).join('')}</div><div class="pagination"><button class="action" data-page="scene-prev" ${state.scenePage === 0 ? 'disabled' : ''}>上一页</button><span>${state.scenePage + 1} / ${scenePages} · ${materials.length} 张</span><button class="action" data-page="scene-next" ${state.scenePage + 1 >= scenePages ? 'disabled' : ''}>下一页</button></div>` : `<div class="axis">${['全部', ...studio.data.classification.propCategories].map(value => `<button class="pill ${state.propCategory === value ? 'active' : ''}" data-prop-category="${value}">${value}</button>`).join('')}</div><div class="compact-reference-grid">${shownProps.map(prop => `<article class="card selectable ${state.selectedPropIds.has(prop.id) ? 'selected' : ''}" data-prop="${prop.id}"><span class="selection-mark">✓</span><img src="${encodeURI(prop.image)}" alt="${studio.utils.escapeHtml(prop.label)}" loading="lazy"><div class="card-body"><h2>${studio.utils.escapeHtml(prop.label)}</h2></div></article>`).join('')}</div><div class="pagination"><button class="action" data-page="prop-prev" ${state.propPage === 0 ? 'disabled' : ''}>上一页</button><span>${state.propPage + 1} / ${propPages} · ${props.length} 张</span><button class="action" data-page="prop-next" ${state.propPage + 1 >= propPages ? 'disabled' : ''}>下一页</button></div>`}` : ''}</section>
      <div class="toolbar"><span class="count">一键清空仅清除场景、道具和当前结果。</span><div class="actions"><button class="action" id="clearPromptWorkspace">一键清空</button><button class="action primary" id="buildPrompts">生成提示词</button></div></div>${renderResults()}`;

    container.querySelector('#promptCombo').onchange = event => { state.combo = event.target.value; state.results = []; render(container); };
    container.querySelector('#promptCount').onchange = event => { state.count = studio.utils.clamp(event.target.value || 1, 1, 8); state.results = []; render(container); };
    container.querySelector('#promptRatio').onchange = event => { state.ratio = event.target.value; state.results = []; render(container); };
    container.querySelector('#toggleReferenceSelector').onclick = () => { state.selectorOpen = !state.selectorOpen; render(container); };
    container.querySelectorAll('[data-selector-tab]').forEach(button => button.onclick = () => { state.selectorTab = button.dataset.selectorTab; render(container); });
    container.querySelectorAll('[data-page]').forEach(button => button.onclick = () => { const [kind, direction] = button.dataset.page.split('-'); state[kind + 'Page'] += direction === 'next' ? 1 : -1; render(container); });
    container.querySelectorAll('[data-prompt-filter] .pill').forEach(button => button.onclick = () => {
      state.filters[button.parentElement.dataset.promptFilter] = button.dataset.value;
      state.scenePage = 0;
      if (button.parentElement.dataset.promptFilter === 'format' && button.dataset.value !== '细节展示') state.filters.detailTags.clear();
      render(container);
    });
    container.querySelectorAll('[data-prompt-multi-filter] .pill').forEach(button => button.onclick = () => {
      const set = state.filters[button.parentElement.dataset.promptMultiFilter];
      if (button.dataset.value === '全部') set.clear();
      else set.has(button.dataset.value) ? set.delete(button.dataset.value) : set.add(button.dataset.value);
      state.scenePage = 0;
      render(container);
    });
    container.querySelectorAll('[data-scene]').forEach(card => card.onclick = () => { state.selectedSceneIds.has(card.dataset.scene) ? state.selectedSceneIds.delete(card.dataset.scene) : state.selectedSceneIds.add(card.dataset.scene); render(container); });
    container.querySelectorAll('[data-prop-category]').forEach(button => button.onclick = () => { state.propCategory = button.dataset.propCategory; state.propPage = 0; render(container); });
    container.querySelectorAll('[data-prop]').forEach(card => card.onclick = () => { state.selectedPropIds.has(card.dataset.prop) ? state.selectedPropIds.delete(card.dataset.prop) : state.selectedPropIds.add(card.dataset.prop); render(container); });
    container.querySelector('#clearPromptWorkspace').onclick = () => { state.selectedSceneIds.clear(); state.selectedPropIds.clear(); state.results = []; state.filters = { style: '全部', scene: '全部', format: '全部', cameraAngle: '全部', subjectOrientation: '全部', detailTags: new Set(), productForms: new Set() }; state.propCategory = '全部'; state.scenePage = 0; state.propPage = 0; render(container); };
    container.querySelector('#buildPrompts').onclick = () => { buildResults(); render(container); };

    container.querySelectorAll('[data-result]').forEach(card => {
      const result = state.results.find(candidate => candidate.key === card.dataset.result);
      const area = card.querySelector('textarea');
      card.querySelector('[data-expand-prompt]').onclick = event => { const expanded = area.classList.toggle('expanded'); event.currentTarget.textContent = expanded ? '收起全文' : '展开全文'; };
      area.oninput = () => {
        result.text = area.value;
        savePromptText(result.key, result.text);
        const previous = card.querySelector('.validation-ok, .validation-error');
        if (previous) previous.outerHTML = validationMarkup(validationFor(result.text, result.item, state.combo));
      };
      card.querySelector('[data-copy]').onclick = () => copyText(area.value);
      card.querySelector('[data-restore]').onclick = () => {
        result.text = result.prompt;
        savePromptText(result.key, result.prompt);
        area.value = result.prompt;
        const previous = card.querySelector('.validation-ok, .validation-error');
        if (previous) previous.outerHTML = validationMarkup(validationFor(result.text, result.item, state.combo));
      };
    });
    const applyGlobal = container.querySelector('#applyGlobalEdit');
    if (applyGlobal) applyGlobal.onclick = () => {
      const extra = container.querySelector('#globalPromptEdit').value.trim();
      if (!extra) return;
      state.results.forEach(result => { result.text = `${result.text}\n${extra}`; savePromptText(result.key, result.text); });
      render(container);
    };
    const copyAll = container.querySelector('#copyAllPrompts');
    if (copyAll) copyAll.onclick = () => copyText(state.results.map((result, index) => `# ${index + 1} ${result.item.id}\n${result.text}`).join('\n\n'));
  }

  studio.features.promptWorkspace = { initialize, render };
})(globalThis.BayerStudio);


(function registerGenerationFeature(studio) {
  'use strict';
  function render(container) {
    container.innerHTML = `<header class="page-head"><div class="eyebrow">IMAGE GENERATION</div><h1>图片生成</h1><p class="subtitle">提示词管线已就绪，此处将接入安全的服务端生图任务。</p></header><section class="placeholder"><h2>下一阶段</h2><p>接入图片生成 API、任务队列、批量进度、结果预览、筛选、重做、下载和历史记录。API Key 将只保存在服务端，不写入前端文件。</p></section>`;
  }
  studio.features.generation = { render };
})(globalThis.BayerStudio);


(function startApplication(studio) {
  'use strict';
  const views = [
    ['library', '01', '素材库'],
    ['modeling', '02', '产品建模'],
    ['promptWorkspace', '03', '提示词'],
    ['generation', '04', '图片生成']
  ];
  studio.features.library.initialize();
  studio.features.modeling.initialize();
  studio.features.promptWorkspace.initialize();
  studio.state.currentView = 'library';

  const app = document.querySelector('#app');
  app.innerHTML = `<div class="shell"><aside class="sidebar"><div class="brand"><small>BAYER VISUAL STUDIO</small>拜耳时光片<br>图片生成平台</div><nav class="nav">${views.map(([key, step, label]) => `<button data-view="${key}"><span class="step">${step}</span>${label}</button>`).join('')}</nav></aside><main class="content" id="view"></main></div>`;
  const view = document.querySelector('#view');

  function render() {
    app.querySelectorAll('[data-view]').forEach(button => button.classList.toggle('active', button.dataset.view === studio.state.currentView));
    studio.features[studio.state.currentView].render(view);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  app.querySelectorAll('[data-view]').forEach(button => button.onclick = () => {
    studio.state.currentView = button.dataset.view;
    render();
  });
  render();
})(globalThis.BayerStudio);
