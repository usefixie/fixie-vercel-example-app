This project is an example of how to use [Fixie](https://usefixie.com) to provide a set of static IPs for projects hosted on [Vercel](https://vercel.com/). It is a simple [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Fixie credentials
To authenticate this example app with Fixie, just make sure the `FIXIE_URL` environment variable is set.

You can do this by enabling the [Fixie Vercel Integration](https://vercel.com/integrations/fixie) and creating a proxy application linked to this project, or by setting the `FIXIE_URL` environment variable manually.

If you do not already have a Fixie account, you can [sign up](https://app.usefixie.com/signup).

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fusefixie%2Ffixie-vercel-example-app&integration-ids=oac_v27tv71yuSgMkh9aNOEbmBdw)

After deploying the project, use the [Fixie Dashboard](https://app.usefixie.com) to provision a proxy for your new project. When you do so, the Fixie integration will automatically set the FIXIE_URL environment variable on your Vercel Project.

Finally, trigger a redeploy of the project so that it will use the new FIXIE_URL environment variable.

## Run Locally

```bash
FIXIE_URL=http://fixie:password@group.usefixie.com:80 npm run dev
```

## Learn More

To learn more about Fixie, see the following resources:
- [Fixie's Vercel Integration Documentation](https://usefixie.com/vercel-static-ip) - learn about how to use Fixie with Vercel
- [Fixie HTTP/S Documentation](https://usefixie.com/documentation/http) - learn how to make HTTP/S requests using popular languages and frameworks
- [Fixie Socks Documentation](https://usefixie.com/documentation/socks) - learn how to establish database connections and other TCP connections through Fixie
