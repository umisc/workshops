#!/usr/bin/env python3

import sys
import subprocess
from urllib.parse import unquote

index_html = open('index.html').read()
dashboard_html = open('dashboard.html').read()

def generate_response(status, msg, headers, body, cookies=[]):
    r = f'HTTP/1.1 {status} {msg}\r\n'
    if headers:
        r += '\r\n'.join(f'{h}: {v}' for h,v in headers.items())
        r += '\r\n'
    if cookies:
        r += '\r\n'.join('Set-Cookie: '+c+'; path=/;' for c in cookies)
        r += '\r\n'
    r += 'Server: HTTP Server 3000\r\n'
    r += 'Connection: closed\r\n'
    r += '\r\n'
    r += body
    return r

def print_500():
    print(generate_response('500', 'Internal Server Error', {}, 'Yeah this probably happens a lot...'))

def process_get(path, headers):
    if path == '/':
        return print(generate_response('200', 'OK', {}, index_html))
    if path.startswith('/dashboard') and 'username' in headers['cookie']:
        return print(generate_response('200', 'OK', {}, dashboard_html, ['secret=0']))
    if path.startswith('/login?username='):
        username = unquote(path.split('/login?username=')[1])
        return print(generate_response('200', 'OK', { 'Content-Type': 'text/html' }, '<html>Thanks for logging in! Click <a href="/dashboard">here</a> to go to your dashboard...</html>', ['username='+username]))
    if path.startswith('/share?link='):
        print(generate_response('200', 'OK', {}, 'Hopefully people like your link!'))
        link = unquote(path.split('/share?link=')[1])
        subprocess.Popen(['./check_link', link])
        return
    if path == '/g3n3r4t3_w1n_c00k13':
        return print(generate_response('200', 'OK', {}, 'weeeeee', ['secret=MISCCTF{http_server_3000_1s_v3ry_b4d}']))

        
    print(generate_response('200', 'OK', {}, 'Yes'))

def process_req():
    method, path, _ = input().split()
    inp = input()
    headers = {}
    try:
        while inp != '\r' and inp != '':
            headers[inp.split(':')[0].lower()] = ':'.join(inp.split(':')[1:]).strip()
            inp = input()
        if method == 'GET':
            return process_get(path, headers)
        print_500()
    except:
        print_500()
        
process_req()
