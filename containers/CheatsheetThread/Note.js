import React from 'react'
import { Button } from 'antd'

import DotDivider from 'components/DotDivider'
import ContributorList from 'components/ContributorList'
import { COMMUNITY_CHEATSHEET } from 'config'

import {
  Wrapper,
  Divider,
  Text,
  Title,
  JoinText,
  ViewsText,
  SyncWrapper,
} from './styles/note'

// import fakeusers from './fakeusers'
import { syncCheetsheetFromGithub, addContributor } from './logic'

const Note = ({ communityRaw, contributors, views }) => (
  <Wrapper>
    <Divider />
    <Text>
      <Title>本页贡献者</Title> <DotDivider />{' '}
      <JoinText
        href={`${COMMUNITY_CHEATSHEET}/${communityRaw}.md`}
        rel="noopener noreferrer"
        target="_blank"
      >
        参与编辑
      </JoinText>
      <ViewsText>浏览: {views}</ViewsText>
    </Text>
    <ContributorList
      users={contributors}
      showAdder
      addContributor={addContributor}
    />
    <SyncWrapper>
      <Button
        size="small"
        type="primary"
        ghost
        onClick={syncCheetsheetFromGithub}
      >
        同步 cheatseet
      </Button>
    </SyncWrapper>
  </Wrapper>
)

export default Note
