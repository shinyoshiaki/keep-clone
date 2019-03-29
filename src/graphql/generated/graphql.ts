
type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AllMemo = {
  memos?: Maybe<Array<Memo>>,
};

export type GetAllMemo = {
  token: Scalars['String'],
};

export type GetUser = {
  name: Scalars['String'],
  password: Scalars['String'],
};

export type Memo = {
  owner: Scalars['String'],
  code: Scalars['String'],
  hash: Scalars['String'],
  title: Scalars['String'],
  text: Scalars['String'],
  tag: Scalars['String'],
};

export type Mutation = {
  createUser: User,
  createMemo: Memo,
};


export type MutationCreateUserArgs = {
  input: NewUser
};


export type MutationCreateMemoArgs = {
  input: NewMemo
};

export type NewMemo = {
  token: Scalars['String'],
  title: Scalars['String'],
  text: Scalars['String'],
  tag: Array<Scalars['String']>,
};

export type NewUser = {
  name: Scalars['String'],
  password: Scalars['String'],
};

export type Query = {
  getUser?: Maybe<User>,
  getAllMemo?: Maybe<AllMemo>,
};


export type QueryGetUserArgs = {
  input: GetUser
};


export type QueryGetAllMemoArgs = {
  input: GetAllMemo
};

export type User = {
  code: Scalars['String'],
  name: Scalars['String'],
  password: Scalars['String'],
  token: Scalars['String'],
};
