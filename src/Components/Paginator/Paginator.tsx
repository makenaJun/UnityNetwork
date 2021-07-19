import React, {FC} from 'react';
import styles from './Paginator.module.scss'

type PropsType = {
    pageSize: number
    currentPage: number
    totalCount: number
    setCurrentPage: (nextPage: number) => void
}

export const Paginator: FC<PropsType> = (props) => {
    const {pageSize, currentPage, totalCount, setCurrentPage} = props;

    const pagesCount = Math.ceil(totalCount / pageSize);

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const paginationButtons = pages.map(p => {
            const onPageChangeHandler = () => {
                setCurrentPage(p)
            };
            const classNames = currentPage === p ? styles.selectedPage : '';

            return (<button key={p}
                            className={classNames}
                            onClick={onPageChangeHandler}
                >{p}</button>
            )
        }
    )


    return (<div>
        {paginationButtons}
    </div>)
}