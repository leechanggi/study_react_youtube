import VideoList from "../components/VideoList";

export interface IItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

const items: IItem[] = [
  {
    kind: "youtube#searchResult",
    etag: "bU5E-9gVXgELOoewFpq5YMSTDF0",
    id: {
      kind: "youtube#video",
      videoId: "K0paoMXIz9k",
    },
    snippet: {
      publishedAt: "2023-08-03T05:31:44Z",
      channelId: "UCdubelOloxR3wzwJG9x8YqQ",
      title: "Новый обвал рубля. Пропаганда для жен российских солдат. Суеверия военных на фронте",
      description:
        "Включайте «Утро на Дожде» в 9.00 Мск! В эфире Денис Катаев и Полина Милушкова. В этом выпуске: Накануне курс ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/K0paoMXIz9k/default_live.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/K0paoMXIz9k/mqdefault_live.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/K0paoMXIz9k/hqdefault_live.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Телеканал Дождь",
      liveBroadcastContent: "live",
      publishTime: "2023-08-03T05:31:44Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Wgt2Q0CuJ0IgWkEJw3K8IjAZGV4",
    id: {
      kind: "youtube#video",
      videoId: "Hsmvqbw_A3A",
    },
    snippet: {
      publishedAt: "2023-08-02T21:00:10Z",
      channelId: "UCZ1eQYEObnfmMiWEhXfQMag",
      title: "Jake Owen - On The Boat Again (Official Music Video)",
      description:
        "Listen to Jake's new album, “Loose Cannon” now: https://jakeowen.lnk.to/LooseCannon Stay connected for exclusive updates: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Hsmvqbw_A3A/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Hsmvqbw_A3A/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Hsmvqbw_A3A/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "jakeowenVEVO",
      liveBroadcastContent: "none",
      publishTime: "2023-08-02T21:00:10Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Od1vLYIRlVA2_7-gVWHw-ywWI_s",
    id: {
      kind: "youtube#video",
      videoId: "oKrAwbfWOmQ",
    },
    snippet: {
      publishedAt: "2023-06-05T02:29:43Z",
      channelId: "UCwzCia9epdLaR7ZzT9ZgT2g",
      title: "Revealing the Truth: Conquering Toenail Fungus &amp; Restoring Deformed Toenails",
      description:
        "Welcome to our YouTube channel, where we bring you expert insights and valuable information on various foot-related issues.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/oKrAwbfWOmQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/oKrAwbfWOmQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/oKrAwbfWOmQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Dr. Nick Campitelli",
      liveBroadcastContent: "none",
      publishTime: "2023-06-05T02:29:43Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Q1W_xzeLBU8O7bMosbOJPo9kQaA",
    id: {
      kind: "youtube#video",
      videoId: "Iiukq_ilT0Y",
    },
    snippet: {
      publishedAt: "2018-04-11T15:00:01Z",
      channelId: "UCLkAepWjdylmXSltofFvsYQ",
      title: "Ep4 It‘s on you and I | BTS: Burn the Stage",
      description:
        "Can the show go on? BTS begin to wrap up their South America tour. Day-by-day, we see how the members passionately discuss ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Iiukq_ilT0Y/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Iiukq_ilT0Y/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Iiukq_ilT0Y/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "BANGTANTV",
      liveBroadcastContent: "none",
      publishTime: "2018-04-11T15:00:01Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "urp_v7x40xPGK1UPHUwvw4IzTmQ",
    id: {
      kind: "youtube#video",
      videoId: "adMBDxnhJMw",
    },
    snippet: {
      publishedAt: "2018-04-25T15:00:00Z",
      channelId: "UCLkAepWjdylmXSltofFvsYQ",
      title: "Ep6 Moonchild | BTS: Burn the Stage",
      description:
        "A surprise appear while in Southeast Asia: BTS are nominated for a Billboard Music Award! Will success on the global stage ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/adMBDxnhJMw/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/adMBDxnhJMw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/adMBDxnhJMw/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "BANGTANTV",
      liveBroadcastContent: "none",
      publishTime: "2018-04-25T15:00:00Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "4AxaAp0amf3ja1lpdhTnPr41eQs",
    id: {
      kind: "youtube#video",
      videoId: "YgG9f4MJ1eU",
    },
    snippet: {
      publishedAt: "2019-01-18T14:00:47Z",
      channelId: "UCLkAepWjdylmXSltofFvsYQ",
      title: "Burn the Stage: the Movie",
      description:
        "Burn the Stage: the Movie is the first movie from BTS, going behind-the-scenes of the BTS WINGS TOUR to reveal the full story of ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/YgG9f4MJ1eU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/YgG9f4MJ1eU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/YgG9f4MJ1eU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "BANGTANTV",
      liveBroadcastContent: "none",
      publishTime: "2019-01-18T14:00:47Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "4WdEO9leaiuvBZoMX-2ErceSgz4",
    id: {
      kind: "youtube#video",
      videoId: "L38H9yVb3d8",
    },
    snippet: {
      publishedAt: "2018-03-28T15:00:50Z",
      channelId: "UCLkAepWjdylmXSltofFvsYQ",
      title: "Ep2 You already have the answer | BTS: Burn the Stage",
      description:
        "A moment of triumph takes a scary turn: Jungkook, the youngest member, falls terribly ill. The Wings tour officially kicks off with a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/L38H9yVb3d8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/L38H9yVb3d8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/L38H9yVb3d8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "BANGTANTV",
      liveBroadcastContent: "none",
      publishTime: "2018-03-28T15:00:50Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "_q83HTzjmSiyoSqNNe_NQVFS0fE",
    id: {
      kind: "youtube#video",
      videoId: "bY6my6j7dQE",
    },
    snippet: {
      publishedAt: "2023-03-24T12:00:33Z",
      channelId: "UCAe1veltjZ9BoDYJt6UVICg",
      title:
        "Einfach Ingwerwurzel in kochende Milch geben! Sie werden erstaunt sein! 5-Minuten-Rezept",
      description:
        "Leckeren Ingwer- und Milchkäse zuzubereiten ist einfach, und jetzt lernst du, wie es geht! Wir zeigen Ihnen ein Rezept, das ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/bY6my6j7dQE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/bY6my6j7dQE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/bY6my6j7dQE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Einfaches Rezept",
      liveBroadcastContent: "none",
      publishTime: "2023-03-24T12:00:33Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "L7Lo9k_aDfZWKMU2__fdruBWr60",
    id: {
      kind: "youtube#video",
      videoId: "wM7axP28RT0",
    },
    snippet: {
      publishedAt: "2022-06-30T23:09:30Z",
      channelId: "UCnzbVkknmqhRqUKg7RDTDeg",
      title:
        "Beal $251M! Jokic $264M Richest NBA History! Lakers Lose Monk! PJ Tucker 76ers! 2022 NBA Free Agency",
      description:
        "Splash the like button for more NBA videos! Follow On Twitch! https://www.twitch.tv/chris_smoove/ New Splash Crewneck/Shirt ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/wM7axP28RT0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/wM7axP28RT0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/wM7axP28RT0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Chris Smoove",
      liveBroadcastContent: "none",
      publishTime: "2022-06-30T23:09:30Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "8oENVn-qf9L_giitJpP49gYj87Y",
    id: {
      kind: "youtube#video",
      videoId: "jQeFWfrnnPo",
    },
    snippet: {
      publishedAt: "2021-12-28T09:00:14Z",
      channelId: "UCxlv4aOnrRTXMRSL8bVJqEw",
      title: "2021년 마블 영화 드라마 9개 중요 포인트 전체 총정리",
      description:
        "여러분 안녕하세요 삐맨입니다 오늘은 21년도 마블 영화와 드라마 전체를 세계관 내 시간 순서대로 총정리 해보려고 합니다. 재밌게 ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/jQeFWfrnnPo/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/jQeFWfrnnPo/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/jQeFWfrnnPo/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "B Man 삐맨",
      liveBroadcastContent: "none",
      publishTime: "2021-12-28T09:00:14Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "IunJYCYxDUdkYrBBGpDjyQU3-qA",
    id: {
      kind: "youtube#video",
      videoId: "rU063xLAXWc",
    },
    snippet: {
      publishedAt: "2021-03-03T16:53:11Z",
      channelId: "UCphTF9wHwhCt-BzIq-s4V-g",
      title: "What If You Flew to Space on a Jetpack?",
      description:
        "Elevate your writing with 20% off Grammarly Premium by signing up at http://www.Grammarly.com/WHATIF Jetpack technology is ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/rU063xLAXWc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/rU063xLAXWc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/rU063xLAXWc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "What If",
      liveBroadcastContent: "none",
      publishTime: "2021-03-03T16:53:11Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "g2DqFwGR10BUQPnTHszCGW4jrks",
    id: {
      kind: "youtube#video",
      videoId: "er_oxNmVVwE",
    },
    snippet: {
      publishedAt: "2023-02-08T08:00:17Z",
      channelId: "UC0htUSwcxfSGNfK_5Q28JkA",
      title: "무려 일주일이나 걸린 요리",
      description:
        "이거 진짜 고소하고 너무 맛잇더라고요. 이건 너무 쉬워서 블로그가 없습니다. 시청해 주셔서 감사합니다. #까르보나라 #계란치즈 ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/er_oxNmVVwE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/er_oxNmVVwE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/er_oxNmVVwE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "1분요리 뚝딱이형",
      liveBroadcastContent: "none",
      publishTime: "2023-02-08T08:00:17Z",
    },
  },
];

export interface HomeProps {
  videoService: IItem[];
}

function Home({ videoService }: HomeProps) {
  return <VideoList data={items} />;
}

export default Home;
