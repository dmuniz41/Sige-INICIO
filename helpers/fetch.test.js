import { describe, expect, it } from "vitest";
import { fetchConToken, fetchSinToken } from "./fetch";

describe("Testing in helper Fetch", () => {
  let token = "";

  it("fetchSinToken should work", async () => {
    const resp = await fetchSinToken("auth", { user: "dmuniz", password: "123456" }, "POST");

    expect(resp instanceof Object).toBe(true);

    const body = await resp.json();
    expect(body.ok).toBe(true);

    token = body.token;
  });

  it("fetchConToken should work", async () => {
    localStorage.setItem("token", token);

    const resp = await fetchConToken("auth", {}, "GET");
    const body = await resp.json();
    expect(body.ok).toBe(true);
  });
});
