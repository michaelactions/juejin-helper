interface EnvConfig {
  COOKIE?: string;
  COOKIE_2?: string;
  COOKIE_3?: string;
  COOKIE_4?: string;
  COOKIE_5?: string;

  EMAIL_USER?: string;
  EMAIL_PASS?: string;
  EMAIL_TO?: string;
  EMAIL_HOST?: string;
  EMAIL_PORT?: string;

  DINGDING_WEBHOOK?: string;
  PUSHPLUS_TOKEN?: string;
  WEIXIN_WEBHOOK?: string;
  SERVERPUSHKEY?: string;
  FEISHU_WEBHOOK?: string;
  BARK_WEBHOOK?: string;
}

const config: EnvConfig = {
  COOKIE: process.env.COOKIE,
  COOKIE_2: process.env.COOKIE_2,
  COOKIE_3: process.env.COOKIE_3,
  COOKIE_4: process.env.COOKIE_4,
  COOKIE_5: process.env.COOKIE_5,

  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  EMAIL_TO: process.env.EMAIL_TO,
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_PORT: process.env.EMAIL_PORT,

  DINGDING_WEBHOOK: process.env.DINGDING_WEBHOOK,
  PUSHPLUS_TOKEN: process.env.PUSHPLUS_TOKEN,
  WEIXIN_WEBHOOK: process.env.WEIXIN_WEBHOOK,
  SERVERPUSHKEY: process.env.SERVERPUSHKEY,
  FEISHU_WEBHOOK: process.env.FEISHU_WEBHOOK,
  BARK_WEBHOOK: process.env.BARK_WEBHOOK
};

export default config;