export default function FriendSidebar() {
  return (
    <>
      <div className="bg-white d-flex flex-column shadow position-fixed h-100 w-80">
        <h1 className="mx-3 mb-3 fw-bolder tw-mt-3 text-6">Friends</h1>
        <ul className="px-2">
          <li className="rounded-3 bg-gray-100">
            <a
              href="/#"
              className="text-decoration-none text-black p-2 d-flex align-items-center gap-3"
            >
              <div className="d-flex justify-content-center align-items-center bg-primary text-white rounded-circle w-9 h-9 ">
                <i className="fa-solid fa-user-check" />
              </div>
              <span>Friend Requests</span>
            </a>
          </li>
          <li className="rounded-3 hover-bg-neutral-100">
            <a
              href="/#"
              className="text-decoration-none text-black p-2 d-flex align-items-center gap-3"
            >
              <div className="d-flex justify-content-center align-items-center rounded-circle w-9 h-9 bg-gray-200">
                <i className="fa-solid fa-user-plus" />
              </div>
              <span>Suggestions</span>
            </a>
          </li>
          <li className="rounded-3 hover-bg-neutral-100">
            <a
              href="/#"
              className="text-decoration-none text-black p-2 d-flex align-items-center gap-3"
            >
              <div className="d-flex justify-content-center align-items-center rounded-circle w-9 h-9 bg-gray-200">
                <i className="fa-solid fa-user-group" />
              </div>
              <span>All Friends</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
