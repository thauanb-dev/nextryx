"use client"

import * as React from "react"

type WithChildren<T> = T & { children?: React.ReactNode }

export function Table(props: WithChildren<React.HTMLAttributes<HTMLTableElement>>) {
  return <table {...props} />
}

export function TableHeader(
  props: WithChildren<React.HTMLAttributes<HTMLTableSectionElement>>
) {
  return <thead {...props} />
}

export function TableBody(
  props: WithChildren<React.HTMLAttributes<HTMLTableSectionElement>>
) {
  return <tbody {...props} />
}

export function TableRow(
  props: WithChildren<React.HTMLAttributes<HTMLTableRowElement>>
) {
  return <tr {...props} />
}

export function TableHead(
  props: WithChildren<React.ThHTMLAttributes<HTMLTableCellElement>>
) {
  return <th {...props} />
}

export function TableCell(
  props: WithChildren<React.TdHTMLAttributes<HTMLTableCellElement>>
) {
  return <td {...props} />
}

