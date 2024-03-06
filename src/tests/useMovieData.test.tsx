import { renderHook } from "@testing-library/react-hooks";
import useMovieData from "../hooks/useMovieData";

describe("useMovieData test", () => {
  it("should set movieData", () => {
    const { result } = renderHook(() => useMovieData("mockUrl", "mockApiKey"));

    expect(result.current[0]).toEqual([]);
  });

  it("should set movieData when fetch is successful", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({
          results: [{ id: 1, title: "Movie 1", overview: "Overview 1" }],
        }),
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useMovieData("mockUrl", "mockApiKey")
    );

    await waitForNextUpdate();

    expect(result.current[0]).toEqual([
      { id: 1, title: "Movie 1", overview: "Overview 1" },
    ]);
    expect(result.current[2]).toBeNull();
  });

  it("should set error when fetch fails", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      useMovieData("mockUrl", "mockApiKey")
    );

    await waitForNextUpdate();

    expect(result.current[0]).toEqual([]);
    expect(result.current[2]).toEqual(new Error("Erro ao buscar filmes"));
  });
});
