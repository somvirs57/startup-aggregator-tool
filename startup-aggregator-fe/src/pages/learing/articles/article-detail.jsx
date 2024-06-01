import { useParams } from "react-router-dom";
import { articles } from "../../../../jsone/masterData";
import { SideMenu } from "../../../components/helper";
export default function ArticleDetail() {
  const { title } = useParams();
  const article = articles.find(article => article.title === decodeURIComponent(title));

  console.log(title,decodeURIComponent(title));
  const breadCrumb = [
    {
      title: <a href="/learing">Learing</a>,
    },
    {
      title: <a href="/learing/articles">Articles</a>,
    },
    {
      title: article.title,
    },
  ];
  return (
    <SideMenu breadCrumb={breadCrumb}>
      <div className="flex gap-9 items-center">
        <img
          src={article.imageSrc}
          alt={article.title}
          className="h-auto w-[50%]"
        />
        <h1 className=" text-2xl">{article.title}</h1>
      </div>
      <div className="flex gap-10 py-10">
        <div>
          <p>{article.description}</p>
          <p>
            Enterprise content marketing is designed to attract and engage a
            large-scale organization’s target audience. Scale and complexity
            sets it apart from traditional content marketing. While traditional
            content marketing focuses more on individual campaigns and smaller
            target markets, enterprise content marketing takes a more holistic
            and integrated approach. You want your brand to be the one that
            everybody looks to as an expert in the industry. When it comes to
            content marketing, the most successful enterprises create spread the
            wealth across multiple channels that each cater to larger, more
            diverse audiences. This strategy aligns content efforts with broader
            business goals to drive brand awareness, thought leadership,
            customer engagement, and, ultimately, business growth.
          </p>
        </div>
        <div className="w-[100%]">
            <h2 className="text-xl">TOPICS</h2>
        </div>
      </div>
    </SideMenu>
  );
}
