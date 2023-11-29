"use client";

const Index = ({ results }) => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="relative isolate px-2 sm:px-6 lg:px-8">
        <div className="p-1 sm:p-8 mx-auto">
          {results && (
            <div className="">
              {results.map((result) => (
                <div
                  className="bg-gradient-to-b from-blue-three to-blue-one/50 sm:p-6 rounded-xl mx-auto p-2 my-2 lg:my-6"
                  key={result.id}
                >
                  <p>{result.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Index;
