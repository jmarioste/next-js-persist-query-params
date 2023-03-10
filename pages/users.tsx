import RetainQueryLink from "../components/RetainQueryLink";

const UsersPage = () => {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div>
      Users
      <div>
        <span>Pagination</span>
        {pages.map((page) => {
          return (
            <RetainQueryLink
              key={page}
              href={{
                query: { page },
              }}
            >
              {` ${page} `}
            </RetainQueryLink>
          );
        })}
      </div>
      <pre>Location:{window.location.href}</pre>
    </div>
  );
};
export default UsersPage;
