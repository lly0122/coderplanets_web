import React from 'react'
import R from 'ramda'
import TimeAgo from 'timeago-react'

import { ICON_CMD } from '../../config'
import { DotDivider, Space, FollowButton } from '../../components'

import { CardWrapper, AttactWrapper, AttactIcon } from './styles/digest_board'

import AchieveCard from './AchieveCard'
import NumbersCard from './NumbersCard'

import SourceContributeInfo from './SourceContributeInfo'

import * as logic from './logic'

const anyTrue = obj => R.any(R.equals(true), R.values(obj))

const DigestBoard = ({ user, accountId }) => (
  <React.Fragment>
    <CardWrapper>
      <AchieveCard user={user} />
      {user.id !== accountId ? (
        <FollowButton
          hasFollowd={user.viewerHasFollowed}
          userId={user.id}
          size="default"
          onFollow={logic.followUser}
          undoFollowUser={logic.undoFollowUser}
        />
      ) : null}
    </CardWrapper>
    <CardWrapper>
      <NumbersCard
        user={user}
        showFollowings={logic.showFollowings}
        showFollowers={logic.showFollowers}
      />
    </CardWrapper>

    <AttactWrapper>
      <AttactIcon src={`${ICON_CMD}/join_at.svg`} />第 {user.id} 位会员{' '}
      <DotDivider /> 加入时间:
      <Space right="5px" />
      <TimeAgo datetime={user.insertedAt} locale="zh_CN" />
    </AttactWrapper>

    <AttactWrapper>
      <AttactIcon src={`${ICON_CMD}/user_been_views.svg`} />
      主页被浏览 {user.views} 次
    </AttactWrapper>

    {anyTrue(user.achievement.sourceContribute) ? (
      <SourceContributeInfo data={user.achievement.sourceContribute} />
    ) : null}

    <AttactWrapper>
      <AttactIcon src={`${ICON_CMD}/sponsor.svg`} />
      本站赞助者(详情)
    </AttactWrapper>
  </React.Fragment>
)

export default DigestBoard