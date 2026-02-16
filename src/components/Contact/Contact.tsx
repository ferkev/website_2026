import React, { useEffect, useState } from "react";

export const Contact = () => {
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error" | "info";
  }>({ show: false, message: "", type: "info" });

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const showToast = (
    message: string,
    type: "success" | "error" | "info" = "info",
  ) => setToast({ show: true, message, type });

  useEffect(() => {
    if (!toast.show) return;
    const timer = setTimeout(
      () => setToast((prev) => ({ ...prev, show: false })),
      3000,
    );
    return () => clearTimeout(timer);
  }, [toast.show]);

  return (
    <>
      {toast.show && (
        <div className="fixed top-6 right-6 z-50">
          <div
            className={`px-5 py-3 rounded-xl shadow-lg text-white font-medium ${
              toast.type === "success"
                ? "bg-green-500"
                : toast.type === "error"
                  ? "bg-red-500"
                  : "bg-blue-500"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}

      <section className="card" id="contact">
        <div className="sectionHead">
          <div>
            <h2>Contact</h2>
            <p>Quick message = quick reply.</p>
          </div>
        </div>

        <div className="contactGrid">
          <div className="panel">
            <p style={{ margin: "0", color: "var(--muted)" }}>
              <strong style={{ color: "var(--text)" }}>Best for:</strong>
              <br />
              Landing pages · Business websites · Portfolios · Redesigns · Speed
              improvements
            </p>
            <div
              style={{
                marginTop: "12px",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <a className="btn primary" href="mailto:ferkev@live.fr">
                Email me
              </a>
              <a className="btn" href="#work">
                See work
              </a>
            </div>
          </div>

          <div className="panel">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (loading) return;

                const form = e.currentTarget;

                try {
                  setLoading(true);
                  showToast("Sending message…", "info");

                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, message }),
                  });

                  const text = await res.text();
                  const data = text ? JSON.parse(text) : {};

                  if (!res.ok) throw new Error(data.error || "Failed to send");

                  showToast("Message sent successfully 🚀", "success");
                  form.reset();
                } catch (err) {
                  showToast(
                    err instanceof Error ? err.message : "Failed to send",
                    "error",
                  );
                } finally {
                  setLoading(false);
                }
              }}
            >
              <label>
                Name
                <input
                  placeholder="Your name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>

              <label>
                Email
                <input
                  placeholder="email@domain.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              <label>
                Message
                <textarea
                  placeholder="Your message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>

              <div
                style={{
                  marginTop: "12px",
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  className="btn primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending…" : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
