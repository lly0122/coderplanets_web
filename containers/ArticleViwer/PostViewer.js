import React from 'react'
import Comments from '../Comments'
import Header from './Header'
import Body from './Body'

import { CommentsWrapper } from './styles/body'

const PostViewer = ({ data, loading, accountInfo }) => (
  <React.Fragment>
    <Header data={data} />
    <Body data={data} loading={loading} accountInfo={accountInfo} />
    <CommentsWrapper>
      <Comments />
    </CommentsWrapper>
  </React.Fragment>
)

export default PostViewer
