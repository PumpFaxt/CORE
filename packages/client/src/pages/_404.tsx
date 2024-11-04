export default function () {
  return (
    <section
      className={"flex flex-col items-center justify-center h-screen p-[20%]"}
    >
      <img src="/404.webp" alt="Not Found" />

      <h1
        className={"mt-4 font-bold text-5xl text-rainbow"}
      >
        404
      </h1>

      <h1 className={"text-center px-4 mt-6 text-base leading-5"}>
        Whatever you were looking for cannot be found.
      </h1>
      <h2 className={"text-orange-600 mt-2 text-lg font-medium"}>
        Go find something else!
      </h2>

      <a href="/" className={"mt-10"}>
        Go back to mommy (homepage)
      </a>
    </section>
  );
}
