## 要是用EMAIL_HOST和EMAIL_PORT变量需要修改以下内容

### .github/workflows/auto.yml添加

```
EMAIL_PORT: ${{ secrets.EMAIL_PORT }}
EMAIL_HOST: ${{ secrets.EMAIL_HOST }}
```

### workflows/utils/env.js添加

```
EMAIL_HOST: env.EMAIL_HOST,
EMAIL_PORT: env.EMAIL_PORT,
```

### worklfows/utils/notification-kit.ts修改第36行-45行为：

```
const transporter = nodemailer.createTransport({
// 彻底弃用 env.xxxx，改用原生 process.env
host: process.env.EMAIL_HOST || ("smtp." + (auth.user as any).match(/@(.*)/)[1]),
secure: true,
port: Number(process.env.EMAIL_PORT) || 465,
auth,
tls: {
rejectUnauthorized: false
}
} as any);
```


