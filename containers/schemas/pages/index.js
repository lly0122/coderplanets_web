import { pagedPosts, post } from './post'
import { pagedJobs, job } from './job'
import { pagedVideos, video } from './video'
import { pagedRepos, repo } from './repo'
import { user, sessionState } from './user'
import { community, subscribedCommunities, pagedCommunities } from './community'
import { pagedComments } from './comment'
import { pagedCategories, partialTags } from './misc'
import cheatsheet from './cheatsheet'
import wiki from './wiki'

import { reaction, undoReaction, setTag, unsetTag } from './action'

const P = {
  // community
  community,
  subscribedCommunities,
  pagedCommunities,
  // comment
  pagedComments,
  // misc
  pagedCategories,
  partialTags,
  // post
  pagedPosts,
  post,
  // job
  pagedJobs,
  job,
  // video
  pagedVideos,
  video,
  // repo
  pagedRepos,
  repo,
  // user
  user,
  sessionState,
  // cheatsheet
  cheatsheet,
  // wiki
  wiki,
  // action
  reaction,
  undoReaction,
  setTag,
  unsetTag,
}

export default P
