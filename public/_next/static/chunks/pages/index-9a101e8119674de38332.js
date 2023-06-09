(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    2707: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(5893),
        s = r(5675),
        a = function (e) {
          var t,
            r = e.file,
            a =
              ((t = +r.sizeInBytes),
              "".concat((+t / 1048576).toFixed(2), " MB"));
          return (0, n.jsxs)("div", {
            className: "flex items-center justify-center w-full p-4  space-x-4",
            children: [
              (0, n.jsx)(s.default, {
                src: "../assets/".concat(r.format, ".png"),
                alt: "",
                height: 60,
                width: 60,
              }),
              (0, n.jsx)("span", {
                className: "text-gray-600 text-md",
                children: r.filename,
              }),
              (0, n.jsx)("span", {
                className: "text-gray-600 text-md",
                children: a,
              }),
            ],
          });
        };
    },
    8280: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return O;
          },
        });
      var n = r(5893),
        s = r(7757),
        a = r.n(s),
        i = r(2137),
        l = r(6156),
        o = r(1389),
        c = r(7294),
        u = r(5675);

      function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }

      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var f = function (e) {
          var t = e.setFile,
            r = (0, c.useCallback)(function (e) {
              t(e[0]);
            }, []),
            s = (0, o.u)({
              onDrop: r,
              multiple: !1,
              accept: "image/jpeg, image/png, audio/mpeg",
            }),
            a = s.getRootProps,
            i = s.getInputProps,
            l = s.isDragAccept,
            d = s.isDragReject;
          return (0, n.jsx)("div", {
            className: "p-4",
            children: (0, n.jsxs)(
              "div",
              m(
                m({}, a()),
                {},
                {
                  className:
                    "h-80 w-full rounded-md cursor-pointer focus:outline-none",
                  children: [
                    (0, n.jsx)("input", m({}, i())),
                    (0, n.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-center h-full border-2 border-dashed border-gray-800 rounded-xl p-4 ".concat(
                          d ? "border-red-600" : l ? "border-green-600" : ""
                        ),
                      children: [
                        (0, n.jsx)(u.default, {
                          src: "/assets/upload.png",
                          alt: "",
                          width: 80,
                          height: 80,
                          className: "mb-4",
                        }),
                        d
                          ? (0, n.jsx)("p", {
                              className:
                                "mt-2 text-lg text-gray-600 text-center font-semibold",
                              children:
                                "Sorry, This app only supports images and mp3",
                            })
                          : (0, n.jsxs)("div", {
                              className:
                                "flex flex-col items-center justify-center",
                              children: [
                                (0, n.jsxs)("p", {
                                  className: "text-gray-600 text-xl",
                                  children: [
                                    "Drop your file here, ",
                                    (0, n.jsx)("span", {
                                      className:
                                        "text-blue-600 hover:text-blue-600 hover:underline",
                                      children: "browse",
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("p", {
                                  className: "mt-2 text-lg text-gray-600",
                                  children:
                                    "Only jpeg, png & mp3 files supported",
                                }),
                              ],
                            }),
                      ],
                    }),
                  ],
                }
              )
            ),
          });
        },
        p = r(2707),
        x = function (e) {
          var t = e.downloadLink;
          return (0, n.jsxs)("div", {
            className:
              "px-4 flex flex-col items-center justify-center space-y-4",
            children: [
              (0, n.jsx)("h1", {
                className: "my-2 font-medium text-lg text-gray-600",
                children: "Download your file here :)",
              }),
              (0, n.jsxs)("div", {
                className: "flex space-x-3",
                children: [
                  (0, n.jsx)("span", {
                    className: "break-all text-sm text-gray-600 font-medium",
                    children: t,
                  }),
                  (0, n.jsx)("div", {
                    className: "cursor-pointer",
                    children: (0, n.jsx)(u.default, {
                      src: "/assets/copy.png",
                      alt: "",
                      height: 50,
                      width: 50,
                      onClick: function () {
                        return navigator.clipboard.writeText(t);
                      },
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        h = r(2283);

      function j(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }

      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(r), !0).forEach(function (t) {
                (0, l.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : j(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var y = function (e) {
          var t = (0, h.cI)(),
            r = t.register,
            s = t.handleSubmit,
            a = t.reset,
            i = t.formState.errors;
          return (0, n.jsxs)("form", {
            onSubmit: s(function (t) {
              e.onSubmit(t), a();
            }),
            className:
              "p-4 flex flex-col items-center justify-center space-y-4 border-2 border-gray-500 my-4 rounded-md",
            children: [
              (0, n.jsx)("p", {
                className: "text-gray-600",
                children: "You can also send the link through mail directly",
              }),
              (0, n.jsx)(
                "input",
                g(
                  g(
                    {},
                    r("emailFrom", {
                      required: !0,
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    })
                  ),
                  {},
                  {
                    type: "email",
                    placeholder: "Email From",
                    className:
                      "p-2 w-full rounded-md text-gray-600 focus:outline-none focus:ring focus:ring-gray-500",
                    required: !0,
                  }
                )
              ),
              i.emailFrom &&
                (0, n.jsx)("p", {
                  className: "text-gray-600",
                  children: i.emailFrom.message,
                }),
              (0, n.jsx)(
                "input",
                g(
                  g(
                    {},
                    r("emailTo", {
                      required: !0,
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    })
                  ),
                  {},
                  {
                    type: "email",
                    placeholder: "Email To",
                    className:
                      "p-2 w-full rounded-md text-gray-600 focus:outline-none focus:ring focus:ring-gray-500",
                    required: !0,
                  }
                )
              ),
              i.emailTo &&
                (0, n.jsx)("p", {
                  className: "text-gray-600",
                  children: i.emailTo.message,
                }),
              e.emailStatus &&
                (0, n.jsx)("p", {
                  className: "text-gray-600",
                  children: e.emailStatus,
                }),
              (0, n.jsx)("button", {
                type: "submit",
                className: "button w-1/2",
                children: "Email",
              }),
            ],
          });
        },
        b = r(9008);

      function O() {
        var e = (0, c.useState)(null),
          t = e[0],
          r = e[1],
          s = (0, c.useState)(null),
          l = s[0],
          o = s[1],
          u = (0, c.useState)(null),
          d = u[0],
          m = u[1],
          h = (0, c.useState)(null),
          j = h[0],
          g = h[1],
          O = (0, c.useState)(""),
          v = O[0],
          w = O[1],
          N = (function () {
            var e = (0, i.Z)(
              a().mark(function e() {
                var r;
                return a().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ("Uploading...." !== j) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return");
                      case 2:
                        return (
                          (r = new FormData()).append("myFile", t),
                          g("Uploading...."),
                          (e.next = 7),
                          fetch("/api/files/upload", {
                            method: "POST",
                            body: r,
                          })
                            .then(function (e) {
                              return e.json();
                            })
                            .then(function (e) {
                              g("File uploaded :)"), o(e.id), m(e.downloadLink);
                            })
                            .catch(function (e) {
                              g("Upload failed!");
                            })
                        );
                      case 7:
                        setTimeout(function () {
                          g(null);
                        }, 1e3);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (0, n.jsxs)(c.Fragment, {
          children: [
            (0, n.jsx)(b.default, {
              children: (0, n.jsx)("title", {
                children: "Fire Share 2.0.0",
              }),
            }),
            (0, n.jsxs)("main", {
              className: "flex flex-col items-center justify-center",
              children: [
                (0, n.jsx)("h1", {
                  className: "my-4 text-3xl font-medium text-gray-600",
                  children: "Got Any File for Sharing? Drop it like its hot!",
                }),
                (0, n.jsxs)("div", {
                  className:
                    "w-96 flex flex-col items-center bg-gray-200 shadow-xl rounded-xl justify-center",
                  children: [
                    !d &&
                      (0, n.jsx)(f, {
                        setFile: r,
                      }),
                    t &&
                      (0, n.jsx)(p.Z, {
                        file: {
                          format: t.type.split("/")[1],
                          filename: t.name,
                          sizeInBytes: t.size,
                        },
                      }),
                    !d &&
                      t &&
                      (0, n.jsx)("button", {
                        onClick: N,
                        className: "button",
                        children: j || "Upload",
                      }),
                    d &&
                      (0, n.jsxs)("div", {
                        className: "flex flex-col items-center justify-center",
                        children: [
                          (0, n.jsx)("p", {
                            className: "text-green-600 px-6",
                            children: "",
                          }),
                          (0, n.jsx)(x, {
                            downloadLink: d,
                          }),
                          (0, n.jsx)(y, {
                            onSubmit: function (e) {
                              fetch("/api/files/email", {
                                method: "POST",
                                body: JSON.stringify({
                                  id: l,
                                  emailFrom: e.emailFrom,
                                  emailTo: e.emailTo,
                                }),
                                headers: {
                                  "Content-Type": "application/json",
                                },
                              })
                                .then(function (e) {
                                  return e.json();
                                })
                                .then(function (t) {
                                  w("File sent to ".concat(e.emailTo));
                                });
                            },
                            emailStatus: v,
                          }),
                          (0, n.jsx)("button", {
                            className: "button",
                            onClick: function () {
                              r(null), m(null);
                            },
                            children: "Upload new file",
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    8581: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(8280);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 478, 921, 888, 179], function () {
      return (t = 8581), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
