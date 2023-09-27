import data from '../../../../public/data.json'
import styles from './field.module.css'

export default function fieldpage(){
    const descriptions=[
        {title: data.description.naturescience.contents.title1, content: data.description.naturescience.contents.content1},
        {title: data.description.naturescience.contents.title2, content: data.description.naturescience.contents.content2},
        {title: data.description.naturescience.contents.title3, content: data.description.naturescience.contents.content3},
        {title: data.description.naturescience.contents.title4, content: data.description.naturescience.contents.content4},
        {title: data.description.naturescience.contents.title5, content: data.description.naturescience.contents.content5},
        {title: data.description.naturescience.contents.title6, content: data.description.naturescience.contents.content6},

    ]
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>{data.description.naturescience.field}</h2>
            {descriptions.map((item, index) => (
                <div key={index}>
                    <h3 className={styles.title}>{index+1}. {item.title}</h3>
                    <p className={styles.paragraph}>{item.content}</p>
                    <br/>
                </div>
            ))}
        </div>
    );
}