import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
  query GET_USER {
    viewer {
      login
      bio
      avatarUrl
      location
      company
      name
      twitterUsername
      url
      websiteUrl
      createdAt
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories {
        totalCount
      }
    }
  }
`;

export default function UserCard() {
  const { data, loading, error } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <img src={data.viewer.avatarUrl} alt={data.viewer.login} />
      <h2>{data.viewer.name}</h2>
      <p>{data.viewer.login}</p>
      <p>{data.viewer.bio}</p>
      <p>{data.viewer.location}</p>
      <p>{data.viewer.company}</p>
      <p>{data.viewer.twitterUsername}</p>
      <p>{data.viewer.url}</p>
      <p>{data.viewer.websiteUrl}</p>
      <p>{data.viewer.createdAt}</p>
      <p>{data.viewer.followers.totalCount}</p>
      <p>{data.viewer.following.totalCount}</p>
      <p>{data.viewer.repositories.totalCount}</p>
    </div>
  );
}
