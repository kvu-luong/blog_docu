import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import projectApi from '../../api/showcaseApi';

// const projectList = [
//   {
//     title: 'Easy to Use',
//     Svg: require('@site/static/img/undraw_interaction_design_odgc.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('@site/static/img/undraw_social_friends_re_7uaa.svg').default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('@site/static/img/undraw_uploading_re_okvh.svg').default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

function Project({date, title, content, author}) {
    // console.log(title, title.rendered, 'infos');
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
        <p>{author}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default function ShowcaseList() {
    const [projectList, setProjectList ] = useState([]);

    useEffect(() => {
        fetchProjectList();
    }, []);

    const fetchProjectList = async () => {
        try{
            const response = await projectApi.getAll();
            setProjectList(response);
           
        } catch (error){
            console.log('Failed to fetch project list: ', error);
        }
    }
    console.log(projectList, 'final');

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {projectList && projectList.map((props, idx) => (
            <Project key={idx} 
                title = {props.title.rendered}
                author = {props.author}
                content = {props.content.rendered}
                date = {props.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
