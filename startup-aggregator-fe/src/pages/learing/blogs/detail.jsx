import { useParams } from "react-router-dom";
import { blogs } from "../../../../jsone/masterData";
import {  SideMenu } from "../../../components/helper";
export default function BlogsDetail() {
  const { title } = useParams();
  const blog = blogs.find(
    (blogs) => blogs.title === decodeURIComponent(title)
  );

  console.log(title, decodeURIComponent(title));
  const breadCrumb = [
    {
      title: <a href="/learing">Learing</a>,
    },
    {
      title: <a href="/learing/blogs">Blogs</a>,
    },
    {
      title: blog.title,
    },
  ];
  return (
    <SideMenu breadCrumb={breadCrumb}>
      <div className="flex items-center justify-between px-5">
        <div>
        <h1 className=" text-2xl  font-semibold">{blog.title}</h1>
        <p className="font-bold text-green-400 ">4 min Read</p>
        </div>
        <img
          src={blog.imageSrc}
          alt={blog.title}
          className="h-[10%] w-[50%]"
        />
      </div>
   
      <div className="flex gap-10 py-10">
        <section>
          <div className="flex gap-10 ">
            <div>
              {/* <p>{template.description}</p> */}
              <h2 className="uppercase text-xl font-semibold my-2">
                {" "}
                Why use this team-level Product Ops template?
              </h2>
              <p className=" text-justify">
                Product teams use Airtable to take products from concept through
                market release to stay agile and keep their customers front and
                center at every stage of product development. When you have a
                single source of truth in Airtable, you can keep all functions
                aligned and working as one team—so you can turn insights into
                user-centric products that customers love. In this reference
                template, we’ll share tips and best practices, gathered by
                leading product teams in the industry like Intuit and Frame.io,
                for leveraging Airtable to streamline and unify each of the six
                stages of product development for individual teams. Follow our
                step-by-step Product Ops Implementation Guides here, alongside
                this reference template. Ready to scale this across multiple
                teams or even your entire organization? Follow along in our
                org-wide Product Operations template here.
              </p>
            </div>
          </div>
        </section>
        <div className="w-[100%]">
          <h2 className=" text-xl font-semibold">CATEGORIES</h2>
          <div>
            <ul>
              
            <li> AI Powered</li> 
            <li> Content production</li> 
            <li> Creative</li> 
            <li> Event Planning</li> 
            <li> Everyday Life</li> 
            <li> Groups, Clubs & Hobbies</li> 
            <li> HR & Recruiting</li> 
            <li> Legal</li> 
            <li> Local Business</li> 
            <li> Marketing</li> 
              
            </ul>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}
