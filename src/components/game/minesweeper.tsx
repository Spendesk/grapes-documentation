"use client";

import { useEffect, useState } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { Button, IconButton } from "@dev-spendesk/grapes";

import { classNames } from "@/utils/classNames";

import "./minesweeper.css";

const SIZE = 10;
const NUMBER_OF_BOMBS = 10;

function generateBombs(): Set<number> {
  const randomNumberArray = new Set<number>();
  do {
    const randomNumber = Math.floor(SIZE ** 2 * Math.random());
    randomNumberArray.add(randomNumber);
  } while (randomNumberArray.size < NUMBER_OF_BOMBS);
  return randomNumberArray;
}

function generateCellContent(grid: number[][], x: number, y: number): number {
  let sum = 0;
  // Same line
  if (y > 0 && grid[x][y - 1] < 0) {
    sum++;
  }
  if (y < SIZE - 1 && grid[x][y + 1] < 0) {
    sum++;
  }
  // Above
  if (x > 0 && y > 0 && grid[x - 1][y - 1] < 0) {
    sum++;
  }
  if (x > 0 && grid[x - 1][y] < 0) {
    sum++;
  }
  if (x > 0 && y < SIZE - 1 && grid[x - 1][y + 1] < 0) {
    sum++;
  }
  // Below
  if (x < SIZE - 1 && y > 0 && grid[x + 1][y - 1] < 0) {
    sum++;
  }
  if (x < SIZE - 1 && grid[x + 1][y] < 0) {
    sum++;
  }
  if (x < SIZE - 1 && y < SIZE - 1 && grid[x + 1][y + 1] < 0) {
    sum++;
  }
  return sum;
}

function generateGrid(): number[][] {
  const grid: number[][] = Array.from({ length: SIZE }, () => []);
  for (let i in grid) {
    grid[i] = Array.from({ length: SIZE }, () => 0);
  }
  const bombs = generateBombs();
  bombs.forEach((bomb) => {
    const x = bomb % SIZE;
    const y = Math.floor(bomb / SIZE);
    grid[x][y] = -1;
  });
  for (let x = 0; x < SIZE; x++) {
    for (let y = 0; y < SIZE; y++) {
      if (grid[x][y] > -1) {
        grid[x][y] = generateCellContent(grid, x, y);
      }
    }
  }
  return grid;
}

function displayEmptyCells(
  visibleCells: Set<number>,
  grid: number[][],
  x: number,
  y: number,
) {
  const cellNumber = Number(`${x}${y}`);
  if (!visibleCells.has(cellNumber)) {
    visibleCells.add(cellNumber);
    if (grid[x][y] === 0) {
      displayEmptyCellsRecursive(visibleCells, grid, x, y);
    }
  }
}

function displayEmptyCellsRecursive(
  visibleCells: Set<number>,
  grid: number[][],
  x: number,
  y: number,
) {
  if (y > 0 && grid[x][y - 1] >= 0) {
    displayEmptyCells(visibleCells, grid, x, y - 1);
  }
  if (y < SIZE - 1 && grid[x][y + 1] >= 0) {
    displayEmptyCells(visibleCells, grid, x, y + 1);
  }
  if (x > 0 && y > 0 && grid[x - 1][y - 1] >= 0) {
    displayEmptyCells(visibleCells, grid, x - 1, y - 1);
  }
  if (x > 0 && grid[x - 1][y] >= 0) {
    displayEmptyCells(visibleCells, grid, x - 1, y);
  }
  if (x > 0 && y < SIZE - 1 && grid[x - 1][y + 1] >= 0) {
    displayEmptyCells(visibleCells, grid, x - 1, y + 1);
  }
  if (x < SIZE - 1 && y > 0 && grid[x + 1][y - 1] >= 0) {
    displayEmptyCells(visibleCells, grid, x + 1, y - 1);
  }
  if (x < SIZE - 1 && grid[x + 1][y] >= 0) {
    displayEmptyCells(visibleCells, grid, x + 1, y);
  }
  if (x < SIZE - 1 && y < SIZE - 1 && grid[x + 1][y + 1] >= 0) {
    displayEmptyCells(visibleCells, grid, x + 1, y + 1);
  }
  return visibleCells;
}

export function Minesweeper() {
  const [grid, setGrid] = useState<number[][]>([[]]);
  const [isSettingFlag, setIsSettingFlag] = useState(false);
  const [flags, setFlags] = useState<Set<number>>(new Set<number>());
  const [visibleCells, setVisibleCells] = useState<Set<number>>(
    new Set<number>(),
  );
  const [areAllCellsVisible, setAreAllCellsVisible] = useState(false);
  const [status, setStatus] = useState<"won" | "lost">();

  useEffect(() => {
    setGrid(generateGrid());
  }, []);

  useEffect(() => {
    if (visibleCells.size === SIZE ** 2 - NUMBER_OF_BOMBS) {
      setAreAllCellsVisible(true);
      setStatus("won");
    }
  }, [visibleCells]);

  function handleOnCellClick(x: number, y: number, isCellVisible: boolean) {
    const cellNumber = Number(`${x}${y}`);
    if (isSettingFlag && !isCellVisible) {
      setFlags((previous) => {
        const newSet = new Set(previous);
        if (newSet.has(cellNumber)) {
          newSet.delete(cellNumber);
        } else {
          newSet.add(cellNumber);
        }
        return new Set(newSet);
      });
      return;
    }
    if (flags.has(cellNumber)) {
      return;
    }
    if (grid[x][y] === -1) {
      setAreAllCellsVisible(true);
      setStatus("lost");
    } else if (grid[x][y] === 0) {
      setVisibleCells(
        displayEmptyCellsRecursive(
          new Set(visibleCells.add(cellNumber)),
          grid,
          x,
          y,
        ),
      );
    } else {
      setVisibleCells((previous) => new Set(previous.add(cellNumber)));
    }
  }

  function reset() {
    setGrid(generateGrid());
    setVisibleCells(new Set<number>());
    setFlags(new Set<number>());
    setAreAllCellsVisible(false);
    setStatus(undefined);
  }

  return (
    <div className="body-m text-center">
      <div className="border border-solid border-neutral-dark">
        {grid.map((row, x) => (
          <div className="flex" key={x}>
            {row.map((_, y) => {
              const cellNumber = Number(`${x}${y}`);
              const isCellVisible =
                areAllCellsVisible || visibleCells.has(cellNumber);
              return (
                <div
                  className={classNames(
                    `cell font-medium text-neutral-darker bg-neutral-lighter`,
                    grid[x][y] === -1 && "bomb",
                    grid[x][y] === 0 && "empty",
                    isCellVisible && "visible",
                    isCellVisible && grid[x][y] === 1 && "!bg-info-lighter",
                    isCellVisible && grid[x][y] === 2 && "!bg-success-lighter",
                    isCellVisible && grid[x][y] === 3 && "!bg-alert-lighter",
                    isCellVisible && grid[x][y] === 4 && "!bg-primary-lighter",
                    !isCellVisible && flags.has(cellNumber) && "cell-flag",
                  )}
                  key={`${x}${y}`}
                  onClick={() => handleOnCellClick(x, y, isCellVisible)}
                >
                  {grid[x][y] > 0 && isCellVisible && grid[x][y]}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex gap-xs mt-xs items-center justify-center">
        <IconButton
          variant="border"
          className={classNames(isSettingFlag && "bg-primary-lighter")}
          iconName="racing-flag"
          onClick={() => setIsSettingFlag(!isSettingFlag)}
        />
        <Button id="restart" variant="ghost" onClick={reset} text="Restart" />
      </div>
      {status === "won" && <Fireworks autorun={{ speed: 3 }} />}
    </div>
  );
}
