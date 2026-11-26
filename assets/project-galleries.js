const projects3D = [
  {
    "title": "地牢刷宝动作游戏",
    "href": "portfolio-3d/dungeon.html",
    "meta": "3D Unity · 动作 RPG · 程序化地牢",
    "summary": "四名角色探索模块化地牢，拾取武器、搭配戒指技能，在成群的骷髅与关底 Boss 之间杀出一条路。",
    "slides": [
      {
        "video": "portfolio-3d/assets/dungeon/main-loop.webm",
        "poster": "portfolio-3d/assets/dungeon/main-loop.webp",
        "alt": "地牢主循环",
        "caption": "在商店整备后进入地牢，清理房间里的敌人、拾取战利品，最后查看本次远征的结算。"
      },
      {
        "video": "portfolio-3d/assets/dungeon/breakables.webm",
        "poster": "portfolio-3d/assets/dungeon/breakables.webp",
        "alt": "场景破坏与掉落",
        "caption": "角色挥锤砸碎房间里的木箱，散落的战利品以不同颜色的光柱标出位置。"
      },
      {
        "video": "portfolio-3d/assets/dungeon/player-classes.webm",
        "poster": "portfolio-3d/assets/dungeon/player-classes.webp",
        "alt": "玩家职业",
        "caption": "四名角色轮流攻击练习目标，可以对照剑、弓、法杖和重锤的出招动作。"
      },
      {
        "video": "portfolio-3d/assets/dungeon/status-effects.webm",
        "poster": "portfolio-3d/assets/dungeon/status-effects.webp",
        "alt": "异常状态",
        "caption": "角色连续攻击练习目标，目标身上的火焰、冰霜和头顶的状态图标随命中发生变化。"
      },
      {
        "video": "portfolio-3d/assets/dungeon/crowd-combat.webm",
        "poster": "portfolio-3d/assets/dungeon/crowd-combat.webp",
        "alt": "人海优化",
        "caption": "大批骷髅同时向角色聚拢，角色边移动边挥锤，一次攻击打出多组伤害数字。"
      },
      {
        "video": "portfolio-3d/assets/dungeon/crystal-encounter.webm",
        "poster": "portfolio-3d/assets/dungeon/crystal-encounter.webp",
        "alt": "水晶遭遇战",
        "caption": "角色绕着红色水晶迎击守卫，击倒与水晶绑定的敌人，逐步解除魂契。"
      },
      {
        "video": "portfolio-3d/assets/dungeon/boss-fight.webm",
        "poster": "portfolio-3d/assets/dungeon/boss-fight.webp",
        "alt": "Boss 战",
        "caption": "长枪 Boss 厄戎近身出招，角色在地面的攻击预警之间走位，寻找反击机会。"
      },
      {
        "src": "portfolio-3d/assets/dungeon/01-dungeon-loot.webp",
        "alt": "地牢出口附近的武器掉落",
        "caption": "房间出口旁落着一把刻印长剑，角色靠近后可以拾取，前方的通道通往下一间房。"
      },
      {
        "src": "portfolio-3d/assets/dungeon/02-weapon-actions.webp",
        "alt": "四种角色的普通攻击",
        "caption": "同一处房间入口，四名角色分别挥剑、放箭、用法杖发射弹体和挥锤重击。"
      },
      {
        "src": "portfolio-3d/assets/dungeon/03-ring-fireball.webp",
        "alt": "剑与弓角色施放同一枚戒指的大火球",
        "caption": "女猎人持剑、弓箭手持弓，两人都能从第一个戒指技能位放出炎火戒指的大火球。"
      },
      {
        "src": "portfolio-3d/assets/dungeon/04-weapon-comparison.webp",
        "alt": "已装备的剑与拾取的刻印长剑",
        "caption": "左图选中已装备的 1 级武器，右图选中刚拾取的 12 级刻印长剑，可以对照两把剑的攻击力。"
      },
      {
        "src": "portfolio-3d/assets/dungeon/05-hammer-freeze.webp",
        "alt": "重锤命中前后的冻结效果",
        "caption": "大锤普攻触发冻结后，同一只骷髅身上覆上冰霜，战斗提示同步显示“施加冻结”。"
      },
      {
        "src": "portfolio-3d/assets/dungeon/06-enemy-approach.webp",
        "alt": "骷髅步兵追近并举刀起手",
        "caption": "骷髅步兵沿房间入口追近玩家，进入近战距离后举刀准备攻击。"
      },
      {
        "src": "portfolio-3d/assets/dungeon/07-crowd-budget.webp",
        "alt": "群怪追击与同帧寻路计数",
        "caption": "左侧怪群正在追击玩家，右侧调试窗口同时列出活跃、休眠的敌人数，以及本帧已用的寻路次数和上限。"
      },
      {
        "src": "portfolio-3d/assets/dungeon/08-crystal-quota.webp",
        "alt": "最后一只绑定敌人倒下前后的水晶计数",
        "caption": "最后一只绑定敌人倒下后，水晶上方的“1／尚缚之魂”变为“0／魂契已尽”。"
      },
      {
        "src": "portfolio-3d/assets/dungeon/09-boss-decision.webp",
        "alt": "厄戎起手动作与本次选招决策",
        "caption": "厄戎在玩家面前起手，右侧决策窗口显示双方距离、各候选招式的权重和本次选中的 M2。"
      },
      {
        "src": "portfolio-3d/assets/dungeon/10-boss-timeline.webp",
        "alt": "长枪横扫与招式时间轴上的命中起点",
        "caption": "厄戎挥枪横扫时，右侧 M2 时间轴的播放头停在伤害窗口起点，可以对照枪身姿态与扇形判定范围。"
      },
      {
        "src": "portfolio-3d/assets/dungeon/11-generated-routes.webp",
        "alt": "种子 7 与种子 23 的地牢路线对照",
        "caption": "同一套配置下，种子 7 生成 22 个房间，种子 23 生成 24 个。沿金色主路可比较从入口到 Boss 房的走向，青框标出两图共用的房间尺寸。"
      },
      {
        "src": "portfolio-3d/assets/dungeon/12-tile-workshop.webp",
        "alt": "房间出口的台阶与高差连接瓦片模板",
        "caption": "左侧选中房间出口的台阶，右侧瓦片制作窗口显示对应的高差连接模板、实例朝向和相邻瓦片预览选项。"
      }
    ]
  },
  {
    "title": "废土种植与搜打撤游戏",
    "href": "portfolio-3d/wasteland.html",
    "meta": "3D Unity · 基地种植 · 搜打撤",
    "summary": "从基地收获作物，带着牧羊犬驾车探索废土据点，在撤离点权衡战利品与异常遗物带来的威胁。",
    "slides": [
      {
        "video": "portfolio-3d/assets/wasteland/main-loop.webm",
        "poster": "portfolio-3d/assets/wasteland/main-loop.webp",
        "alt": "废土搜打撤主循环",
        "caption": "玩家驾车穿过荒漠，在路边修车铺与守敌交火，搜取物资后打开战地地图查看路线。"
      },
      {
        "video": "portfolio-3d/assets/wasteland/outpost-drive.webm",
        "poster": "portfolio-3d/assets/wasteland/outpost-drive.webp",
        "alt": "驾车探索废土据点",
        "caption": "玩家在战地地图上查看据点位置，随后骑上摩托，沿荒漠公路加速驶向据点。"
      },
      {
        "video": "portfolio-3d/assets/wasteland/combat-loot.webm",
        "poster": "portfolio-3d/assets/wasteland/combat-loot.webp",
        "alt": "战斗与战利品搜刮",
        "caption": "玩家在核心材料库与守敌交火，随后搜查倒地的敌人，把武器和物资收入背包。"
      },
      {
        "video": "portfolio-3d/assets/wasteland/extraction-fight.webm",
        "poster": "portfolio-3d/assets/wasteland/extraction-fight.webp",
        "alt": "撤离点清除追兵",
        "caption": "玩家守在绿色撤离圈内，击倒逼近的追兵，画面上方的剩余追兵数降至零。"
      },
      {
        "video": "portfolio-3d/assets/wasteland/base-farming.webm",
        "poster": "portfolio-3d/assets/wasteland/base-farming.webp",
        "alt": "基地设施与种田",
        "caption": "玩家穿过基地来到农场，在俯视界面中选取田格种植作物，收获的玉米落在田里供玩家拾取。"
      },
      {
        "video": "portfolio-3d/assets/wasteland/player-mobility.webm",
        "poster": "portfolio-3d/assets/wasteland/player-mobility.webp",
        "alt": "角色机动演示",
        "caption": "玩家在测试场冲刺，翻越不同高度的障碍后接滑铲，再向高台发射钩锁，借力登顶。"
      },
      {
        "video": "portfolio-3d/assets/wasteland/player-weapons.webm",
        "poster": "portfolio-3d/assets/wasteland/player-weapons.webp",
        "alt": "三种玩家武器演示",
        "caption": "玩家在测试场依次使用三种武器射击，近处的敌人受击后被击飞，远处的敌群在连续射击中倒下。"
      },
      {
        "video": "portfolio-3d/assets/wasteland/enemy-encounters.webm",
        "poster": "portfolio-3d/assets/wasteland/enemy-encounters.webp",
        "alt": "多种敌人与垂直关卡战斗",
        "caption": "玩家先在测试场迎击不同类型的敌人，随后登上橙色平台，与对面低处的敌人交火。"
      },
      /* 暂停展示
      {
        "src": "portfolio-3d/assets/wasteland/01-base-harvest.webp",
        "alt": "基地田格中的玉米收获",
        "caption": "成熟玉米从田格中弹出，落地后可由玩家拾取。"
      },
      */
      /* 暂停展示
      {
        "src": "portfolio-3d/assets/wasteland/02-extraction-risk.webp",
        "alt": "撤离点的异常遗物风险评估",
        "caption": "在撤离点选中异常遗物后，面板显示丢弃它可将总威胁从 99 降至 57。"
      },
      */
      /* 暂停展示
      {
        "src": "portfolio-3d/assets/wasteland/03-vault.webp",
        "alt": "角色冲刺翻越矮路障",
        "caption": "角色在冲刺中单手撑住矮路障，借势翻到另一侧。"
      },
      */
      /* 暂停展示
      {
        "src": "portfolio-3d/assets/wasteland/04-grapple.webp",
        "alt": "钩锁将角色拉向集装箱",
        "caption": "钩锁挂住高处的集装箱，绳索收紧后将角色拉向锚点。"
      },
      */
      /* 暂停展示
      {
        "src": "portfolio-3d/assets/wasteland/05-dog-boarding.webp",
        "alt": "牧羊犬从车后跃上摩托",
        "caption": "骑手就位后，牧羊犬会自行绕到摩托车后方，跃上乘客座。"
      },
      */
      {
        "src": "portfolio-3d/assets/wasteland/06-vehicles.webp",
        "alt": "五种载具并排展示",
        "caption": "前景是裂刃摩托，后排从左到右依次是收割者、油匠、萤火和伯爵。"
      },
      {
        "src": "portfolio-3d/assets/wasteland/07-modular-outposts.webp",
        "alt": "两个据点共用废料机械场模块",
        "caption": "03 和 09 号据点共用废料机械场模块，09 号另加岩石路障，改变了玩家接近据点的路线。"
      },
      {
        "src": "portfolio-3d/assets/wasteland/08-valley-routes.webp",
        "alt": "河谷断桥两侧的绕行路线",
        "caption": "主公路在河心中断，玩家可以从北侧浅滩或南侧木桥绕行。"
      },
      {
        "src": "portfolio-3d/assets/wasteland/09-web-bake.webp",
        "alt": "Web 地图设计与 Unity 烘焙结果对照",
        "caption": "同一份地图数据烘焙到 Unity 后，河弯、桥头和东岸据点的接路都与 Web 工作台中的设计对应。"
      },
      /* 暂停展示
      {
        "src": "portfolio-3d/assets/wasteland/10-cover-fire.webp",
        "alt": "步枪掠夺者从掩体后起身开火",
        "caption": "步枪掠夺者从低掩体后起身，等枪口越过护栏才向玩家开火。"
      },
      */
      {
        "src": "portfolio-3d/assets/wasteland/11-enemy-distribution.webp",
        "alt": "路边修车铺与核心材料库的守敌波次",
        "caption": "路边修车铺的 8 名守敌分两波出场，核心材料库的 30 名守敌分三波出场。"
      }
    ]
  },
  {
    "title": "开放世界第三人称射击原型",
    "href": "portfolio-3d/open-world.html",
    "meta": "3D Unity · 第三人称射击 · 城市交通",
    "summary": "在 PalmCity 街头越肩射击、驾驶警车过弯，观察行人交会与车流跟停。",
    "slides": [
      {
        "video": "portfolio-3d/assets/open-world/city-tour.webm",
        "poster": "portfolio-3d/assets/open-world/city-tour.webp",
        "alt": "PalmCity 城市巡览",
        "caption": "开始界面的镜头依次掠过棕榈大道、游艇码头和海滨游乐场。"
      },
      {
        "video": "portfolio-3d/assets/open-world/city-drive.webm",
        "poster": "portfolio-3d/assets/open-world/city-drive.webp",
        "alt": "驾车在城市漫游",
        "caption": "玩家驾驶警车穿过街头车流，在路口甩尾转弯，沿海滨道路继续前行。"
      },
      {
        "video": "portfolio-3d/assets/open-world/vehicle-handling.webm",
        "poster": "portfolio-3d/assets/open-world/vehicle-handling.webp",
        "alt": "多种载具驾驶与上下车动画",
        "caption": "玩家依次驾驶警车、跑车和越野皮卡在测试场转弯甩尾，随后展示角色拉开警车车门、上车驾驶和停车下车的动作。"
      },
      {
        "video": "portfolio-3d/assets/open-world/city-traffic.webm",
        "poster": "portfolio-3d/assets/open-world/city-traffic.webp",
        "alt": "城市行人与车流",
        "caption": "行人在摩天轮旁的人行道上迎面交错，镜头随后切到街口，一辆白色厢式车与对向驶来的蓝色轿车交会。"
      },
      {
        "src": "portfolio-3d/assets/open-world/01-shoulder-shot.webp",
        "alt": "街头越肩开火",
        "caption": "警员在 PalmCity 街头越肩开火，枪口火光和墙面上的瞄准位置同框可见。"
      },
      {
        "src": "portfolio-3d/assets/open-world/02-handbrake.webp",
        "alt": "警车手刹过弯",
        "caption": "警车拉起手刹转向，车尾向外滑，后轮在路面留下弯曲的胎印。"
      },
      {
        "src": "portfolio-3d/assets/open-world/03-sidewalk-passing.webp",
        "alt": "两名行人在人行道上错身",
        "caption": "以棕榈树旁的石块为参照，紫衣行人和绿帽行人在同一条人行道上迎面走近，错身后继续前行。"
      },
      {
        "src": "portfolio-3d/assets/open-world/04-following-stop.webp",
        "alt": "后车接近与制动后的实测速度",
        "caption": "同一辆前车停在路边车道上。后车接近时为 18.1 km/h，制动后降至 0.1 km/h，两车之间仍留有距离。"
      },
      {
        "src": "portfolio-3d/assets/open-world/05-walk-region.webp",
        "alt": "人行区的烘焙边界和容量",
        "caption": "左侧绿色通行区绕开固定障碍；右侧选中的 Sidewalk 0_-10_226 已烘焙出 48.9 平方米可达面积，对应容量为 14 人。"
      },
      {
        "src": "portfolio-3d/assets/open-world/06-turn-connection.webp",
        "alt": "车道转弯与编辑器中的对应连接",
        "caption": "左侧车道从路口向上转弯；右侧对应道路 0 → 1 正向接入道路 1 → 3 正向，可调整这条连接的通行开关和弯曲偏移。"
      }
    ]
  }
];

const galleryList = document.getElementById('games-3d');
const template = document.getElementById('gallery-template');

for (const { title, href, meta, summary, slides } of projects3D) {
  const gallery = template.content.firstElementChild.cloneNode(true);
  gallery.querySelector('h3').textContent = title;
  gallery.querySelector('.meta').textContent = meta;
  gallery.querySelector('.gallery-summary').textContent = summary;
  const slideTitle = gallery.querySelector('.gallery-caption strong');
  const imageLink = gallery.querySelector('.gallery-image');
  imageLink.setAttribute('aria-haspopup', 'dialog');
  gallery.querySelector('.gallery-link').href = href;
  const image = imageLink.querySelector('img');
  const caption = gallery.querySelector('.gallery-caption p');
  const count = gallery.querySelector('.gallery-count');
  let video;
  if (slides.some(slide => slide.video)) {
    video = document.createElement('video');
    video.className = 'project-video';
    video.controls = video.loop = video.muted = video.playsInline = true;
    video.preload = 'none';
    imageLink.after(video);
  }
  let current = 0;

  let revision = 0;
  function showSlide(step) {
    const activeRevision = ++revision;
    current = (current + step + slides.length) % slides.length;
    const slide = slides[current];
    image.getAnimations().forEach(animation => animation.cancel());
    imageLink.hidden = Boolean(slide.video);
    if (video) {
      video.hidden = !slide.video;
      if (slide.video) {
        video.setAttribute('aria-label', slide.alt);
        video.dataset.poster = slide.poster;
        if (video.getAttribute('src') !== slide.video) {
          video.src = slide.video;
          projectVideoObserver.unobserve(video);
          projectVideoObserver.observe(video);
        }
      } else {
        video.pause();
      }
    }
    if (!slide.video) {
      imageLink.href = slide.src.replace(/\/([^/]+)\.webp$/, '/original/$1.webp');
      imageLink.setAttribute('aria-label', '放大截图：' + slide.alt);
      image.alt = slide.alt;
      if (step) image.src = slide.src;
      else projectCoversReady.then(() => {
        if (revision === activeRevision) image.src = slide.src;
      });
    }
    slideTitle.textContent = slide.alt;
    caption.textContent = slide.caption;
    count.textContent = (current + 1) + ' / ' + slides.length;

    if (step && !slide.video && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      image.decode().then(() => {
        if (revision !== activeRevision) return;
        image.animate([
          { opacity: 0.55, transform: 'translateX(' + step * 18 + 'px)' },
          { opacity: 1, transform: 'translateX(0)' }
        ], { duration: 220, easing: 'ease-out' });
      }).catch(() => {});
    }
  }

  gallery.addEventListener('preview-step', event => {
    let distance = event.detail;
    while (slides[(current + distance + slides.length) % slides.length].video) distance += event.detail;
    showSlide(distance);
  });
  const [previous, next] = gallery.querySelectorAll('button');
  previous.addEventListener('click', () => showSlide(-1));
  next.addEventListener('click', () => showSlide(1));
  showSlide(0);
  galleryList.append(gallery);
}

const categories = document.querySelectorAll('.category-switch button');
function showCategory(id) {
  for (const button of categories) {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const selected = panel.id === id;
    button.setAttribute('aria-pressed', String(selected));
    panel.hidden = !selected;
  }
}

for (const button of categories) {
  button.addEventListener('click', () => showCategory(button.getAttribute('aria-controls')));
}

// Reveal the destination before the browser follows the fragment link.
document.getElementById('browse-2d').addEventListener('click', event => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  if (event.target.closest('a.project-card')) showCategory('games-2d');
});

function revealLinkedProject() {
  const target = document.getElementById(location.hash.slice(1));
  if (target?.matches('#games-2d .detail-card') && target.closest('[hidden]')) {
    showCategory('games-2d');
    target.scrollIntoView();
  }
}
window.addEventListener('hashchange', revealLinkedProject);
revealLinkedProject();
