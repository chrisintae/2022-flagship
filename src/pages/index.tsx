import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

import styles from "../components/sass/home.module.sass";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className={styles.container}>
        <h1>Hello, I'm Chris-Intae.</h1>

        <p>
          I enjoy creating impactful experiences &ndash; internal or external
          facing &ndash; as both a product designer and frontend developer.
          Currently, I work in the healthcare IT space with previous experience
          in visual design and creative marketing with non-profits, startups,
          and tech industry.
        </p>

        <p>Appreciate you.</p>
      </div>
    </Layout>
  );
}
