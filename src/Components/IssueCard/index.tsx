import React from 'react';
import styles from './styles.module.scss';

interface Label {
    name: string,
}

interface IssueCardProps {
    title: string,
    html_url: string,
    labels: Array<Label>,
    body:string,
    user:{
    avatar_url: string,
    login: string,
    },
    key:'string',
}

export const IssueCard: React.FC<IssueCardProps> = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img className={styles.image} src={props.user.avatar_url} alt="alternative text for accesibility" />
                <div className={styles.header}>
                    <a className={styles.link} href={props.html_url}>
                        <h1 className={styles.title}>{props.title}</h1>
                    </a>
                    <h2 className={styles.username}>{`@${props.user.login}`}</h2>
                </div>

            </div>
            <div className={styles.labelContainer}>
                {props.labels && props.labels.map((label) => {
                    return (
                        <p className={styles.labelText}>{label.name}</p>
                    );
                })}
            </div>
        </div>
    );
};
