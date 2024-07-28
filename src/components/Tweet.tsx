import { EmbeddedTweet, TweetNotFound, TweetSkeleton, useTweet, type TweetProps } from 'react-tweet';

export const Tweet = (props: TweetProps) => {
  const { id, components, ...rest } = props;
  const { data, error, isLoading } = useTweet(id, `/api/tweet/${id}`);

  if (error) {
    return <TweetNotFound error={error} />;
  }
  if (isLoading || !data) {
    return <TweetSkeleton />;
  }
  return (
    <div className={`flex justify-center max-w-[500px]`}>
      <EmbeddedTweet tweet={data} components={components} {...rest} />
    </div>
  );
};
