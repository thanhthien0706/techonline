#!/usr/bin/env python3
"""Local static server for html/ with clean-URL fallback (serves foo.html for /foo)."""
import http.server
import os
import sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "html")


class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def translate_path(self, path):
        local_path = super().translate_path(path)
        if os.path.exists(local_path):
            return local_path
        trimmed = local_path.rstrip(os.sep)
        if trimmed and not os.path.splitext(trimmed)[1]:
            candidate = trimmed + ".html"
            if os.path.isfile(candidate):
                return candidate
        return local_path


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5500
    http.server.test(HandlerClass=CleanURLHandler, port=port)
