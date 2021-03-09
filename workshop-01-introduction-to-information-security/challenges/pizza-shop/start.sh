#!/bin/sh

socat -dd TCP4-LISTEN:"$2",fork,reuseaddr EXEC:"$1",pty,echo=0,raw,iexten=0
